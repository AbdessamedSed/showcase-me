import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Contact Info */}
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-400" />
            <span>Hennaya, Tlemcen, Algeria</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-400" />
            <span>Oued Smar, Algiers, Algeria</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-400" />
            <span>ka_seddiki@esi.dz</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-blue-400" />
            <span>+213 792 382 540</span>
          </div>
        </div>

        {/* Center Section: Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-white hover:text-blue-400 text-xl">
            <SiResearchgate />
          </a>
          <a href="#" className="text-white hover:text-blue-400 text-xl">
            <SiGooglescholar />
          </a>
          <a href="#" className="text-white hover:text-blue-400 text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-blue-400 text-xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-white hover:text-blue-400 text-xl">
            <FaGithub />
          </a>
          <a href="#" className="text-white hover:text-blue-400 text-xl">
            <FaInstagram />
          </a>
        </div>

        {/* Right Section: Signature */}
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          <p>Made by Abdessamed </p>
          <hr />
          <p>Copyright © 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
