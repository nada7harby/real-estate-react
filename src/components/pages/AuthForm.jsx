import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImage from "../../assets/images/login-modal.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Swal from "sweetalert2";
import { useAuth } from "../common/AuthContext";

const AuthForm = ({ mode, setMode, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const isLogin = mode === "login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!emailRegex.test(email)) {
      Swal.fire({
        title: 'Invalid email format',
        confirmButtonColor: '#6EC1E4'
      });
      return;
    }
    if (!passwordRegex.test(password)) {
      Swal.fire({
        title: 'Password must be at least 6 characters and include letters, numbers, and symbols!',
        confirmButtonColor: '#6EC1E4'
      });
      return;
    }
    if (!isLogin && password !== confirmPassword) {
      Swal.fire({
        title: 'Passwords do not match!',
        confirmButtonColor: '#6EC1E4'
      });
      return;
    }

    if (isLogin) {
      // First check users.json
      fetch('/data/users.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const jsonUsers = data.users;
          const user = jsonUsers.find((u) => u.email === email && u.password === password);

          if (user) {
            login({
              id: user.id,
              username: user.username,
              email: user.email,
              role: user.role
            });
            navigate("/");
            onClose();
            return;
          }

          // If not found in users.json, check localStorage
          const localStorageUsers = JSON.parse(localStorage.getItem("users") || "[]");
          const localStorageUser = localStorageUsers.find((u) => u.email === email && u.password === password);

          if (localStorageUser) {
            login({
              id: localStorageUser.id,
              username: localStorageUser.username,
              email: localStorageUser.email,
              role: localStorageUser.role || 'user'
            });
            navigate("/");
            onClose();
            return;
          }

          // If user not found in both places
          const emailExists = [...jsonUsers, ...localStorageUsers].find((u) => u.email === email);
          if (!emailExists) {
            Swal.fire({
              title: 'This email does not exist!',
              confirmButtonColor: '#6EC1E4'
            });
          } else {
            Swal.fire({
              title: 'Incorrect password!',
              confirmButtonColor: '#6EC1E4'
            });
          }
        })
        .catch(error => {
          console.error('Error loading users:', error);
          // If there's an error loading users.json, check localStorage only
          const localStorageUsers = JSON.parse(localStorage.getItem("users") || "[]");
          const localStorageUser = localStorageUsers.find((u) => u.email === email && u.password === password);

          if (localStorageUser) {
            login({
              id: localStorageUser.id,
              username: localStorageUser.username,
              email: localStorageUser.email,
              role: localStorageUser.role || 'user'
            });
            navigate("/");
            onClose();
            return;
          }

          Swal.fire({
            title: 'Error loading users data!',
            text: 'Please try again later.',
            confirmButtonColor: '#6EC1E4'
          });
        });
    } else {
      // For signup, first check if email exists in users.json
      fetch('/data/users.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const jsonUsers = data.users;
          const localStorageUsers = JSON.parse(localStorage.getItem("users") || "[]");
          
          const emailExists = [...jsonUsers, ...localStorageUsers].find((u) => u.email === email);

          if (emailExists) {
            Swal.fire({
              title: 'Email already registered!',
              confirmButtonColor: '#6EC1E4'
            });
            return;
          }

          // Add new user to localStorage
          const newUser = {
            id: Date.now(),
            username,
            email,
            password,
            role: 'user'
          };

          localStorageUsers.push(newUser);
          localStorage.setItem("users", JSON.stringify(localStorageUsers));

          // Login the new user
          login({
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role
          });

          Swal.fire({
            title: 'Account created successfully!',
            confirmButtonColor: '#6EC1E4'
          }).then(() => {
            setMode("login");
            navigate("/");
          });
        })
        .catch(error => {
          console.error('Error loading users:', error);
          // If there's an error loading users.json, proceed with localStorage only
          const localStorageUsers = JSON.parse(localStorage.getItem("users") || "[]");
          const emailExists = localStorageUsers.find((u) => u.email === email);

          if (emailExists) {
            Swal.fire({
              title: 'Email already registered!',
              confirmButtonColor: '#6EC1E4'
            });
            return;
          }

          // Add new user to localStorage
          const newUser = {
            id: Date.now(),
            username,
            email,
            password,
            role: 'user'
          };

          localStorageUsers.push(newUser);
          localStorage.setItem("users", JSON.stringify(localStorageUsers));

          // Login the new user
          login({
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role
          });

          Swal.fire({
            title: 'Account created successfully!',
            confirmButtonColor: '#6EC1E4'
          }).then(() => {
            setMode("login");
            navigate("/");
          });
        });
    }
  };

  const [currentDate, setCurrentDate] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  useEffect(() => {
    if (location.pathname === "/signup") {
      setMode("signup");
    } else {
      setMode("login");
    }
  }, [location.pathname]);
  useEffect(() => {
    const now = new Date();
    const date = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const day = now.toLocaleDateString("en-US", {
      weekday: "long",
    });
    setCurrentDate(date);
    setCurrentDay(day);
  }, []);

  return (
    <Box className="flex w-full items-center justify-center min-h-screen bg-blue-50 relative">
      <Box className="flex bg-white rounded-xl overflow-hidden shadow-lg max-w-4xl w-full">
        <Box
          className="hidden md:flex w-1/2 p-10 items-center justify-center relative"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box className="absolute inset-0 bg-black opacity-50" />
          <Box className="relative text-white flex flex-col w-full h-full p-4">
            <FormatQuoteIcon className="text-white text-5xl mb-4" />
            <Box className="text-left mt-4">
              <Typography variant="body1" className="italic text-2xl md:text-3xl leading-relaxed">
                Owning a home is a keystone of wealth... both financial affluence and emotional security.
              </Typography>
            </Box>
            <Box className="mt-auto text-left">
              <Typography variant="body2" className="text-lg">
                {currentDate}
              </Typography>
              <Typography variant="h6" className="font-bold text-xl">
                {currentDay}!
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="w-full md:w-1/2 p-10 flex flex-col">
          <Box className="flex justify-between items-center w-full mb-6">
            <Typography variant="h5" className="font-bold text-gray-500">
              RealHomes Ultra
            </Typography>
            <IconButton
              onClick={onClose}
              className="absolute right-4 bg-white hover:bg-blue-100 rounded-full p-1"
            >
              <CloseIcon />
            </IconButton>

          </Box>
          <Box className="mb-6 border-b-2 border-blue-400 pb-2">
            <Typography
              variant="h6"
              className="text-blue-400 font-semibold"
            >
              {isLogin ? "Login" : "Sign Up"}
            </Typography>
          </Box>

          <Box className="w-full flex flex-col gap-4 bg-blue-50 p-6 rounded-3xl">
            {!isLogin && (
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            )}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isLogin && (
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}
            <Box className="flex items-center justify-between">
              {isLogin && (
                <Link to="/forgot-password" className="text-blue-500 text-sm">
                  Forget Password?
                </Link>
              )}
            </Box>
            <Button
              variant="contained"
              fullWidth
              sx={{ borderRadius: "2rem", py: 1.5 }}
              onClick={handleSubmit}
            >
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </Box>

          <Typography variant="body2" className="text-center mt-4">
            {isLogin ? "Don't have an account? " : "Already a member? "}
            <span
              onClick={() => setMode(isLogin ? "signup" : "login")}
              className="text-blue-400 cursor-pointer"
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </Typography>

        </Box>
      </Box>
    </Box>
  );
};
export default AuthForm;