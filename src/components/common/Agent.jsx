import React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import overviewStyles from "../../styles/components/overviewStyles.module.css";
import Avatar from "@mui/material/Avatar";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import "../../styles/components/overviewStyles.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Button from "@mui/material/Button";
export default function Agent({agentsDetails}) {
    console.log(agentsDetails);
    let agentInfo = [
        { name: "Office", icon: <PhoneIcon />, socialContact: "1-222-333-4444" },
        { name: "Mobile", icon: <PhoneIcon />, socialContact: "1-234-456-7892" },
        { name: "Fax", icon: <FaxIcon />, socialContact: "1-333-444-5555" },
        {
          name: "WhatsApp",
          icon: <WhatsAppIcon />,
          socialContact: "1-222-333-4422",
        },
        {
          name: "Email",
          icon: <EmailIcon />,
          socialContact: "robot@inspirythemes.com",
        },
    ];
    return (
    <>
   
      {agentsDetails.map((agent)=>{
                return (
                  <div className='agent mt-10'>
                  <Stack direction="row" spacing={2} sx={{ marginBottom: "20px" , paddingX : 4}}>
              <Avatar
                src={agent.img}
                sx={{ width: 80, height: 80 }}
              />
              
              <Stack direction="column" spacing={2}>
                <Typography
                  className="title"
                  variant="subtitle2"
                  style={{ fontWeight: "bold" }}
                >
                  {agent.status}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ marginTop: "0px !important", fontWeight: "bold" }}
                >
                  {agent.name}
                </Typography>
                <Typography
                  variant="body1"
                  component="a"
                  sx={{
                    color: "var(--global-color-primary)",
                    fontWeight: "bold",
                    cursor: "pointer",
                    "&:hover": {
                      color: "var(--global-color-headings)",
                    },
                  }}
                >
                  View My Listings
                </Typography>
              </Stack>
            </Stack>
            <Box>
              {agent.social_media.map((info) => {
                return (
                  <Stack
                    direction="row"
                    spacing={5}
                    className="contact__office"
                  >
                    <Typography>{info.name}</Typography>
                    <Stack direction="row" spacing={4}>
                      <span
                        style={{
                          color: "var(--global-color-primary)",
                        }}
                      >
                        {info.icon}
                      </span>
                      <a href="#">{info.socialContact}</a>
                    </Stack>
                  </Stack>
                );
              })}
            </Box>
            {/* <div className="ultra-form mx-5">
                <p className="field-wrapper">
                    <label htmlFor="rh-enquiry-name">
                        <AccountCircleIcon/>
                    </label>
                    <input type="text" id='rh-enquiry-name' name="name" placeholder="Name" className="ultra-field" />

                </p>
                <p className="field-wrapper">
                    <label htmlFor="rh-enquiry-email">
                    <EmailIcon />
                    </label>
                    <input type="text" id='rh-enquiry-email' name="email" placeholder="Email" className="ultra-field" />
                </p>
                <p className="field-wrapper">
                    <label htmlFor="rh-enquiry-phone">
                        <PhoneIcon/>
                    </label>
                    <input type="text" id='rh-enquiry-phone' name="phone" placeholder="phone" className="ultra-field" />
                    
                </p>
                <p className="field-wrapper">
                    <label htmlFor="rh-enquiry-name">
                    <ChatBubbleIcon/>
                    </label>
                    
                    <textarea className="pl-2 ultra-field"  name="rh-enquiry-message" id="rh-enquiry-message" value="Hello, I am interested in Home in Merrick Way">
                      
                    </textarea>
                    
                </p>
                <Button
                              variant="contained"
                              sx={{
                                borderRadius: "30px",
                                background: "var(--global-color-primary)",
                                m: 1,
                                width : "100%",
                                "&:hover": {
                                  backgroundColor: "#fff !important",
                                  color: "var(--global-color-primary)",
                                  border: "1px solid var(--global-color-primary)",
                                },
                              }}
                            >
                              send Message
                </Button>
            </div> */}
            </div>
                )
              })
              }
          </>
           
    
  )
}
