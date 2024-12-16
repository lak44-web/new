

import React from "react";


const Footer = () => {
  return (
    <div className="bg-gray-100  pt-10 pb-5">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
        <div className="space-x-4">
          <a href="https://www.facebook.com/about" className="hover:underline">
            About
          </a>
          <a href="https://www.facebook.com/help" className="hover:underline">
            Help
          </a>
          <a href="https://www.facebook.com/privacy/explanation" className="hover:underline">
            Privacy
          </a>
          <a href="https://www.facebook.com/legal/terms" className="hover:underline">
            Terms
          </a>
          <a href="https://www.facebook.com/pages/create" className="hover:underline">
            Create a Page
          </a>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          <p>Facebook &copy; {new Date().getFullYear()} | All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
