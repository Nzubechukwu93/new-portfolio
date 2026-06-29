import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <p>
          © 2026 Nzubechukwu Oriji. All Rights Reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/Nzubechukwu93"
            target="blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
            
          >
            <FaGithub size={22} />
          
          </a>
          
          <a href="https://www.linkedin.com/in/nzubechukwu-oriji"
            target="blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin size={22} />
          </a>

          <a href="https://x.com/DevZubes"
            target="blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaTwitter size={22} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;