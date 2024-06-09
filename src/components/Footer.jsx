import React from "react";

const Footer = () => {
  return (
    <div className="flex-col">
      <div>
        <p className="text-center">© 2024 Mohd Musaiyab. All Rights Reserved</p>
      </div>
      <div className="flex items-center justify-center">
        <p>Made with </p>
        <img
          src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png"
          className="h-10 w-10"
        ></img>
        <p>and</p>
        <img
          src="https://cdn-icons-png.flaticon.com/128/5712/5712418.png"
          alt="AI/ML icon"
          className="h-10 w-10 ml-2 md:ml-0 md:mt-0"
        />
      </div>
    </div>
  );
};

export default Footer;
