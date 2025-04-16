import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <div className="social">
          <p>
            Join us :{" "}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social_img youtube"
                src="/images/youtube_logo.png"
                alt="youtubelogo"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social_img insta"
                src="/images/insta_logo.png"
                alt="instalogo"
              />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <img
                className="social_img x"
                src="/images/x_logo.png"
                alt="xlogo"
              />
            </a>
          </p>
        </div>
        <div className="allFooter">
          <div className="contact">
            <h2>Contact Us</h2>
            <p className="detail">
              Email <KeyboardDoubleArrowRightIcon />{" "}
              <a href="mailto: ankit.mishraug23@nsut.ac.in">
                mailtogov@gmail.com
              </a>
            </p>
            <p className="detail">
              Phone <KeyboardDoubleArrowRightIcon />
              <a href="tel:+918178577822">+918178577822</a>
            </p>
          </div>
          <div className="Links">
            <h2>Links</h2>
            <div className="inLink">
              <p>
                <a
                  href="https://www.bjp.org/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="links_img"
                    src="images/BJP_Symbol.png"
                    alt="bjplogo"
                  />
                </a>
                <a
                  href="https://aamaadmiparty.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="links_img aapLogo"
                    src="images/aap_symbol.png"
                    alt="applogo"
                  />
                </a>
                <a
                  href="https://www.inc.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="links_img incLogo"
                    src="images/INC_Symbol.png"
                    alt="incLogo"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          © {year} MyGov. All rights reserved. |
          <a href="/terms" className="footer-link">
            {" "}
            Terms of Service
          </a>{" "}
          |
          <a href="/privacy" className="footer-link">
            {" "}
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
