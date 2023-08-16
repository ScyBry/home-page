import './Footer.css';

import vk from '../../img/icons/vk.svg';
import instagram from '../../img/icons/instagram.svg';
import twitter from '../../img/icons/twitter.svg';
import linkedIn from '../../img/icons/linkedIn.svg';
import gitHub from '../../img/icons/gitHub.svg';
import telegram from '../../img/icons/telegram-logo-black-and-white.png';

const mass = [instagram, twitter, linkedIn, gitHub];

const mas = [
      {
            img: vk,
            link: 'https://vk.com/poleg2015',
      },
      {
            img: linkedIn,
            link: 'https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%B3-%D0%BF%D1%83%D0%BB%D0%BA%D0%BE-a33156288/',
      },
      {
            img: gitHub,
            link: 'https://github.com/ScyBry',
      },
      {
            img: telegram,
            link: 'https://t.me/Oleg124124',
      },
];

const Footer = () => {
      return (
            <footer className="footer">
                  <div className="container">
                        <div className="footer__wrapper">
                              <ul className="social">
                                    {mas.map((item) => (
                                          <li className="social__item">
                                                <a href={item.link}>
                                                      <img src={item.img} alt="Link" />
                                                </a>
                                          </li>
                                    ))}
                              </ul>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;
