/**
 * Title: Write a program using JavaScript on Footer4
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 01, October 2023
 */

import React from "react";

const Footer4 = () => {
  return (
    <section className="bg-[#252145] py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <button className="text-white text-xs flex flex-row gap-x-2 items-center hover:bg-white/20 py-2 px-4 rounded-full transition-colors ease-linear delay-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path d="M12,2A10,10,0,1,0,22,12,10.012,10.012,0,0,0,12,2ZM9,18.883v0.528A7.938,7.938,0,0,1,4.06,11.06l3.385,3.385a2.967,2.967,0,0,0,1.649,4.4ZM17.5,15a2.509,2.509,0,0,0,.5-0.05V15a0.992,0.992,0,0,0,.927.985A8,8,0,0,1,12,20c-0.216,0-.427-0.016-0.639-0.032l1.254-2.5-0.015.006A2.968,2.968,0,0,0,13,16a2.988,2.988,0,0,0-5-2.221V11H9a1,1,0,0,0,1-1V9a1,1,0,0,0,1-1,1,1,0,0,0,0-2H6.726A7.9,7.9,0,0,1,14,4.263V6a1,1,0,0,0,2,0V5.082a8.047,8.047,0,0,1,2,1.649V7H17a1,1,0,0,0,0,2h2.411a7.941,7.941,0,0,1,.326,1H17a2.556,2.556,0,0,0-2,2.5A2.5,2.5,0,0,0,17.5,15Z"></path>
            </svg>
            <span>Bangladesh | English (US) | $(USD)</span>
          </button>

          <p className="text-xs text-white">
            © {new Date().getFullYear()} Etsy, Inc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer4;
