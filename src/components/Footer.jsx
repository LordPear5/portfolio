import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="content-wrap">
        <h2>Contact</h2>

        <div className="contact-info">
          <a href="mailto:annepasz993@gmail.com">
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/anna-paszkiewicz9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/LordPear5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.facebook.com/whatagoodtaco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Anna Paszkiewicz
        </p>
      </div>
    </footer>
  );
}
