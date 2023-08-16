const Contacts = () => {
      return (
            <main className="section">
                  <div className="container">
                        <h1 className="title-1">Contacts</h1>

                        <ul className="content-list">
                              <li className="content-list__item">
                                    <h2 className="title-2">Location</h2>
                                    <p>Vitebsk, Belarus</p>
                              </li>
                              <li className="content-list__item">
                                    <h2 className="title-2">Telegram / Viber</h2>
                                    <p>
                                          <a href="tel:+3752922514882">+375 (29) 251-48-82</a>
                                    </p>
                              </li>
                              <li className="content-list__item">
                                    <h2 className="title-2">Email</h2>
                                    <p>
                                          <a href="mailto:oleg28082003@gmail.com">
                                                oleg28082003@gmail.com
                                          </a>
                                    </p>
                              </li>
                        </ul>
                  </div>
            </main>
      );
};

export default Contacts;
