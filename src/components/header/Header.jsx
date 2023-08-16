import './Header.css';

const Header = () => {
      return (
            <header className="header">
                  <div className="header__wrapper">
                        <h1 className="header__title">
                              <strong>
                                    Hi, my name is <em>Oleg</em>
                              </strong>
                              <br />a trainee frontend developer
                        </h1>
                        <div className="header__text">
                              <p>with passion for learning and creating.</p>
                        </div>
                        <a
                              href="https://drive.google.com/drive/folders/1NvW7zjE0f7vRkb5--TN5tDdjTB9QvbTJ?usp=drive_link"
                              className="btn"
                              download>
                              Download CV
                        </a>
                  </div>
            </header>
      );
};

export default Header;
