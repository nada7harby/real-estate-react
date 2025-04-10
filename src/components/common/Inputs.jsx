import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import { Stack } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { Controller } from "react-hook-form";

export default function InputAdornments({ control }) {
  const contactFields = [
    {
      labelName: "name",
      icon: <AccountCircleIcon />,
      placeholder: "Enter Your Name",
      rules: { required: "Name is required" }
    },
    {
      labelName: "phone",
      icon: <LocalPhoneIcon />,
      placeholder: "Enter Your Phone",
      rules: { required: "Phone is required" }
    },
    {
      labelName: "email",
      icon: <EmailIcon />,
      placeholder: "Enter Your Email",
      rules: { 
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address"
        }
      }
    },
  ];

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <FormControl fullWidth sx={{}}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            {contactFields.map((field) => (
              <Controller
                key={field.labelName}
                name={field.labelName}
                control={control}
                rules={field.rules}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    fullWidth
                    label={field.labelName.charAt(0).toUpperCase() + field.labelName.slice(1)}
                    value={value || ''}
                    onChange={onChange}
                    size="medium"
                    error={!!error}
                    helperText={error?.message}
                    placeholder={field.placeholder}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {field.icon}
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            ))}
          </Stack>
          <Box sx={{ position: "relative", width: "100%" }}>
            <EmailIcon
              sx={{
                position: "absolute",
                top: "16px",
                left: "12px",
                color: "#888",
                pointerEvents: "none",
              }}
            />
            <Controller
              name="message"
              control={control}
              rules={{ required: "Message is required" }}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={4}
                    value={value || ''}
                    onChange={onChange}
                    placeholder="Type your message..."
                    style={{
                      width: "100%",
                      padding: "10px 10px 10px 40px",
                      borderRadius: "30px",
                      border: error ? "1px solid red" : "1px solid #ccc",
                      fontSize: "14px",
                      fontFamily: "inherit",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                  />
                  {error && (
                    <p style={{ color: "red", fontSize: "0.75rem", marginLeft: "14px" }}>
                      {error.message}
                    </p>
                  )}
                </>
              )}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                borderRadius: "30px",
                background: "var(--global-color-primary)",
                m: 1,
                "&:hover": {
                  backgroundColor: "#fff !important",
                  color: "var(--global-color-primary)",
                  border: "1px solid var(--global-color-primary)",
                },
              }}
            >
              Schedule
            </Button>
          </Box>
        </FormControl>
      </div>
    </Box>
  );
}