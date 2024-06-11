import React from 'react';
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import './Footer.css'


export const Footer = () => {

  return (
    <>
      <footer className="footer">

        <section className="social">
          <div className="social_line">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <Link to={"https:www.linkedin.com/in/shubham-gupta-4930b522a"} className="social_icon">
              <FaLinkedin size={30} />
            </Link>
            <Link to={"https://www.instagram.com/_its_shubham_guys_/"} className="social_icon">
              <FaInstagram size={30} />
            </Link>
            <Link to={"https://github.com/ShubhamGupta24"} className="social_icon">
              <FaGithub size={30} />
            </Link>
          </div>
        </section>


        <section>
          <div className="container">
            <div className="row">
              <div className="column_one">
                <h3 className="subheadings">
                  QuickCart
                </h3>
                <hr className="custom_line" />
                <p>
                  To provide a seamless and efficient online shopping
                  experience by offering a user-friendly platform that
                  prioritizes speed, convenience, and reliability,
                  enabling customers to easily browse, purchase, and
                  receive their desired products with utmost satisfaction.
                </p>
              </div>

              <div className="column_two">

                <h3 className="subheadings">
                  Products
                </h3>
                <hr className="custom_line" />
                <p>
                  <Link to={"/"} className="link_text">QuickCart</Link>
                </p>
              </div>

              <div className="column_three">

                <h3 className="subheadings">
                  Useful links
                </h3>
                <hr className="custom_line" />
                <p>
                  <Link to={"https://github.com/ShubhamGupta24"} className="link_text">Github</Link>
                </p>
                <p>
                  <Link to={'/Contact'} className="link_text">Help</Link>
                </p>
              </div>

              <div className="column_four">

                <h3 className="subheadings">Contact</h3>
                <hr className="custom_line" />
                <Link to={'/Contact'} className='social_icon'><MdContactMail size={30} /></Link>
                <p>
                  guptashubhamofficial24@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="copyright">
          © 2021 Copyright:
          <span><Link className="link_text" to={"/"}>QuickCart</Link></span>
        </div>
      </footer>
    </>
  )
}