import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-name">
          <h2>Angela Karki</h2>
          <p>&#169; 2023 copyright all right reserved</p>
        </div>
        <div className="footer-links">
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook "></i>
          </a>
          <a href="https://github.com/">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/feed/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    );
  }
}
export default Footer;
