import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import "../../styles/components/comments-styles.css";

export default function Comments() {
  let [comments, setcomments] = useState([
    {
      name: "John Doe",
      time: "September 9, 2015",
      message: "This is a sample comment...",
    },
  ]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    console.log(new Date().toDateString())
    let time = new Date().toLocaleDateString();
    let {author , comment } = data;
    let commentMsg = {name : author ,  time , message : comment };
    console.log(commentMsg);
    setcomments([...comments , commentMsg]);
    console.log(comments);
    reset();
  };

  // const comments = [
  //   {
  //     name: "John Doe",
  //     time: "September 9, 2015",
  //     message: "This is a sample comment...",
  //   },
  // ];

  return (
    <div className="comments__section">
      <div className="text-xl font-bold mt-10 mb-5">{comments.length} Comment</div>
      {comments.map((comment, index) => (
        <div className="comments__info flex gap-6" key={index}>
          <Avatar src="../../../public/avatars/avatar_1.jpg" sx={{ width: 60, height: 60 }} />
          <div>
            <div className="comment__meta">
              <h5 className="text-md font-semibold">{comment.name}</h5>
              <p className="text-sm">{comment.time}</p>
            </div>
            <div className="comment__body my-5">
              <p>{comment.message}</p>
              <a href="#" className="reply__link mt-5 text-lg font-bold">Reply</a>
            </div>
          </div>
        </div>
      ))}

      {/* === Form === */}
      <div className="text-xl font-bold mt-10 mb-5">Leave a Reply</div>
      <form onSubmit={handleSubmit(onSubmit)} className="comment__respond p-4 my-10">
        {/* Comment */}
        <div className="form__field mb-4">
          <label htmlFor="comment" className="block mb-2">Comment</label>
          <div className="flex items-start gap-2">
            <ChatBubbleIcon />
            <textarea
              id="comment"
              placeholder="Your Comment"
              className="pl-2 w-full"
              {...register("comment", { required: "Comment is required" })}
            />
          </div>
          {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>}
        </div>

        {/* Name */}
        <div className="form__field mb-4">
          <label htmlFor="author" className="block mb-2">Name</label>
          <div className="flex items-center gap-2">
            <AccountCircleIcon />
            <input
              type="text"
              id="author"
              placeholder="Your name"
              className="w-full"
              {...register("author", { required: "Name is required" })}
            />
          </div>
          {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
        </div>

        {/* Email */}
        <div className="form__field mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <div className="flex items-center gap-2">
            <EmailIcon />
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Website */}
        <div className="form__field mb-4">
          <label htmlFor="url" className="block mb-2">Website</label>
          <div className="flex items-center gap-2">
            <LanguageIcon />
            <input
              type="url"
              id="url"
              placeholder="Your website"
              className="w-full"
              {...register("url")}
            />
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="contained"
          sx={{
            borderRadius: "30px",
            background: "var(--global-color-primary)",
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
  );
}
