import React from "react";
import { Link } from "react-router-dom";

const ContactPageView: React.FC = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-white">
        <h2 className="text-3xl font-mono font-bold text-center">
          NEED MORE HELP?
        </h2>
        <h2 className="text-3xl font-mono font-bold mb-6 text-center">
          CONTACT US.
        </h2>
        <div className="max-w-lg mx-auto flex flex-col items-center">
          <p className="text-lg mb-6 text-center">
            This site isn't even our final form. <br /> Reach out us directly
            for hard-to-answer questions.
          </p>
          <Link
            className="bg-blue-500 p-3 rounded-tl-lg rounded-br-lg"
            to="/contact"
          >
            Submit a Ticket
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPageView;
