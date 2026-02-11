import React, { useState } from "react";

const CustomCursor = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-11/12 mx-auto py-2 flex justify-between items-start relative max-lg:w-3/4 max-lg:mx-2">
      
      {/* Name Section */}
      <div className="flex flex-col justify-evenly py-2">
        <h5 className="text-xl md:text-2xl font-body text-forest">
          Sylvia Maina
        </h5>
        <h6 className="text-xl md:text-2xl font-thin text-forest">
          Web developer
        </h6>
      </div>

      {/* Desktop LinkedIn */}
      <div className="hidden md:flex py-2">
        <a
          href="https://www.linkedin.com/in/sylvia-maina-a2b956159/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl md:text-2xl font-mono text-sage flex items-center"
        >
          LinkedIn
          <span className="ml-3 text-2xl">↗</span>
        </a>
      </div>

      {/* Mobile @ Button */}
      <div className="md:hidden py-2 relative">
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl font-mono text-sage"
        >
          @
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg px-4 py-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage font-mono flex items-center"
            >
              LinkedIn
              <span className="ml-2">↗</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
