import "./Footer.css";

import vk from "../../img/icons/vk.svg";
import instagram from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import linkedIn from "../../img/icons/linkedIn.svg";
import gitHub from "../../img/icons/gitHub.svg";

const mass = [, instagram, twitter, linkedIn, gitHub];

const mas = [
  {
    img: vk,
    link: "https"
  },
  {
    img: vk,
    link: "https"
  },
  {
    img: vk,
    link: "https"
  },
  {
    img: vk,
    link: "https"
  },
  {
    img: vk,
    link: "https"
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {mass.map((item) => (
              <li className="social__item">
                <a href="#!">
                  <img src={item} alt="Link" />
                </a>
              </li>
            ))}
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
