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
          <FaGithub size={22} />
          <FaLinkedin size={22} />
          <FaTwitter size={22} />
        </div>

      </div>
    </footer>
  );
};

export default Footer;