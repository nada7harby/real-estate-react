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
export default function InputAdornments() {
  let contactFields = [
    {
      labelName: "Name",
      icon: <AccountCircleIcon />,
      placeholder: "Enter Your Name",
    },
    {
      labelName: "Phone",
      icon: <LocalPhoneIcon />,
      placeholder: "Enter Your Phone",
    },
    {
      labelName: "Email",
      icon: <EmailIcon />,
      placeholder: "Enter Your Email",
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
            {contactFields.map((field) => {
              return (
                <TextField
                  fullWidth
                  label={field.labelName}
                  size="medium"
                  id="outlined-start-adornment"
                  rows={100}
                  placeholder={field.placeholder}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          {field.icon}
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              );
            })}
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
            <TextareaAutosize
              aria-label="minimum height"
              minRows={4}
              placeholder="Type your message..."
              style={{
                width: "100%",
                padding: "10px 10px 10px 40px",
                borderRadius: "30px",
                border: "1px solid #ccc",
                fontSize: "14px",
                fontFamily: "inherit",
                resize: "vertical",
                boxSizing: "border-box",
              }}
            />
            <Button
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
