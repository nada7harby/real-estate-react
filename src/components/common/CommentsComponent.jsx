import React from "react";
import Avatar from "@mui/material/Avatar";
import "../../styles/components/comments-styles.css";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
export default function comments() {
  let comments = [
    {
      name : "John Doe",
      time : "September 9, 2015",
      message : `
      This is a sample comment. We have been extremely pleased with your attentiveness, communication, honesty and advice throughout the entire process. Selling a house is a stressful occurrence for anyone and you have helped to make it as smooth as possible for us. We feel that you truly go beyond the general duties of a real estate agent with thorough follow ups, reporting and always being ‘on top’ of potential buyers.
      `,
    }
  ]
  return (
    <div className="comments__section">
      <div className="text-xl font-bold mt-10 mb-5">1 Comment</div>
      <div className="comments__info flex gap-6">
        <Avatar
          src="../../../public/avatars/avatar_1.jpg"
          sx={{ width: 60, height: 60 }}
        />
        <div>
          <div className="comment__meta">
            <h5 className="text-md font-semibold">John Doe</h5>
            <p>
              <a href="#" className="text-sm">
                September 9, 2015
              </a>
            </p>
          </div>
          <div className="comment__body my-5">
            <p>
              This is a sample comment. We have been extremely pleased with your
              attentiveness, communication, honesty and advice throughout the
              entire process. Selling a house is a stressful occurrence for
              anyone and you have helped to make it as smooth as possible for
              us. We feel that you truly go beyond the general duties of a real
              estate agent with thorough follow ups, reporting and always being
              ‘on top’ of potential buyers.
            </p>
            <div className="my-5">
              <a href="#" className="reply__link mt-5 text-lg font-bold">
                Reply
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xl font-bold mt-10 mb-5">
        Leave a Reply
      </div>
      <div className="comment__respond p-4 my-10">
        <form action="#">
          <p className="comment-notes mb-5">Your email address will not be published.    </p>
          <div className="form__field">
            <label className="mb-2" htmlFor="comment">
              Comment
            </label>
            <p className="form__comment form__textarea field__wrapper">
              <label htmlFor="comment">
                <div className="icon">
                <ChatBubbleIcon/>
                </div>
               
                 
              </label>
              <textarea className="pl-2"  name="comment" id="comment" placeholder="Your Comment">

              </textarea>
            </p>

          </div>
          <div className="fields__split">
            <div className="form__field">
              <label className="mb-2" htmlFor="author">
                Name
              </label>
              
              <p className="form__comment comment-form-author field__wrapper">
                <label htmlFor="author">
                  <AccountCircleIcon/>
                </label>
                <input type="text" id="author" name="author" placeholder="Your name"/>
              </p>
              
            </div>
            <div className="form__field">
              <label className="mb-2" htmlFor="email">
                Email
              </label>
              
              <p className="form__comment comment-form-author field__wrapper">
                <label htmlFor="email">
                <EmailIcon/>
                </label>
                <input type="text" id="email" name="email" placeholder="Your email"/>
              </p>
              
            </div>
          </div>
          <div className="form__field">
              <label className="mb-2" htmlFor="url">
                Website
              </label>
              
              <p className="form__comment comment-form-wrapper field__wrapper">
                <label htmlFor="url">
                <LanguageIcon/>
                </label>
                <input type="text" id="url" name="url" placeholder="Your website"/>
              </p>
              
          </div>
          <p className="comment-form-cookies-consent">
            <input value="yes" type="checkbox" id="wp-comment-cookies-consent" name="wp-comment-cookies-consent"/>
            <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
          </p>
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
              Post Comment
            </Button>
        </form>
      </div>
    </div>
  );
}
