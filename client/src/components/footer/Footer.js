import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
                <li>Lorem, ipsum</li>
              </ul>
            </div>
            {/* column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem, ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum</a>
                </li>
              </ul>
            </div>
            {/* column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem, ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum</a>
                </li>
              </ul>
            </div>

            {/* column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>Social</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">
                    <BsFacebook></BsFacebook>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaInstagram></FaInstagram>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <AiFillYoutube></AiFillYoutube>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <SiTwitter></SiTwitter>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Conditoria App - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: #343a40;
    padding-top: 3rem;
    color: #fff;
    text-align: center;
  }

  .footer-bottom {
    padding: 3rem 0 2rem 0;
    text-align: center;
  }

  ul li a {
    color: gray;
    text-decoration: none;
  }

  ul li a:hover {
    color: #fff;
  }
`;
