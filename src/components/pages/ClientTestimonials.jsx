import React, { useEffect, useState } from "react";
import defaultImage from "../../assets/images/default-profile.png";

const ClientTestimonials = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("clientMessages")) || [];
    const uniqueMessages = [];
    const seen = new Set();

    for (const msg of storedMessages) {
      const key = `${msg.name}-${msg.message}`;
      if (!seen.has(key)) { 
        uniqueMessages.push(msg);
        seen.add(key);
      }
    }

    setMessages(uniqueMessages);
  }, []);

  return (
    <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4"> Comments </h2>
      {messages.length === 0 ? (
        <p className="text-gray-500"> There are no comments yet!</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg, index) => (
            <li key={index} className=" space-y-6 flex items-start gap-10">
              <img
                src={msg.image || defaultImage}
                alt="client"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-blue-500">{msg.name}</p>
                <p className="text-gray-700">{msg.message}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ClientTestimonials;