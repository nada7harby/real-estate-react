import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast"; 
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";

const ContactFormSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8qdxubt", "template_zkzftho", form.current, "e77TqKOn8eJjXoBS8")
      .then(
        () => {
          toast.success("Message sent successfully!"); 
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send:", error);
          toast.error("Something went wrong. Please try again."); 
        }
      );
  };

  return (
    <div className="bg-blue-50 mt-32 px-4 py-10 md:px-16 rounded-3xl max-w-5xl mx-auto">
      <form ref={form} onSubmit={sendEmail}>
        {/* Name & Phone */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1">
            <label className="block text-gray-500 font-medium mb-1">Name</label>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <PersonIcon className="text-blue-500 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="flex-1 outline-none text-gray-700 bg-transparent"
                required
              />
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-gray-500 font-medium mb-1">Phone</label>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <PhoneIcon className="text-blue-500 mr-2" />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="flex-1 outline-none text-gray-700 bg-transparent"
              />
            </div>
          </div>
        </div>

        
        <div className="mb-6">
          <label className="block text-gray-500 font-medium mb-1">Email</label>
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
            <EmailIcon className="text-blue-500 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="flex-1 outline-none text-gray-700 bg-transparent"
              required
            />
          </div>
        </div>

        
        <div className="mb-6">
          <label className="block text-gray-500 font-medium mb-1">Message</label>
          <div className="flex items-start bg-white rounded-2xl px-4 py-3 shadow-sm">
            <MessageIcon className="text-blue-500 mr-2 mt-1" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="flex-1 outline-none text-gray-700 bg-transparent resize-none"
              required
            />
          </div>
        </div>

        
        <div className="mb-6 flex items-start">
          <input type="checkbox" className="mt-1 mr-2" required />
          <p className="text-sm text-gray-700">
            I consent to having this website store my submitted information so they can respond to my inquiry.
          </p>
        </div>

        
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium px-6 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactFormSection;


