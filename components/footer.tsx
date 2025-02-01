import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook } from "react-icons/fa";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-1000 text-white py-6 px-4">
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
          <a href="https://www.linkedin.com/in/abdessamed-seddiki-15019b211/" className="text-white hover:text-blue-400 text-xl">
            <FaLinkedin />
          </a>
          <a href="https://scholar.google.com/citations?user=K86_jrkAAAAJ&hl=fr" className="text-white hover:text-blue-400 text-xl">
            <SiGooglescholar />
          </a>
          <a href="https://www.researchgate.net/profile/Abdessamed-Seddiki?ev=hdr_xprf" className="text-white hover:text-blue-400 text-xl">
            <SiResearchgate />
          </a>
          <a href="https://github.com/AbdessamedSed" className="text-white hover:text-blue-400 text-xl">
            <FaGithub />
          </a>
          <a href="https://x.com/Abdou28710" className="text-white hover:text-blue-400 text-xl">
            <FaXTwitter />
          </a>
          <a href="https://www.facebook.com/abdessamed.seddiki.75/" className="text-white hover:text-blue-400 text-xl">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-blue-400 text-xl">
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
