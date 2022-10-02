import React from 'react';
import { logo } from '../assets';
import {footerLinks, socialMedia} from '../constants';
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="link-details">
        <div className="comp-details">
          <img src={logo} />
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className="useful-links">
          {footerLinks.map((item, index_1) => {
            return (
              <div className="footer-links">
                <p>{item.title}</p>

                <ul>
                  {item.links.map((footerLink, index) => {
                    return (
                      <li><a href={footerLink.link}>{footerLink.name}</a></li>
                    )
                  })}
                </ul>
  
              </div>
            )
          })}
        </div>
      </div>

      <div className="copyright">
        <p>Copyright ©️ 2022 HooBank. All Rights Reserved.</p>

        <div className="socials">
          {socialMedia.map((item, index) => {
            return (
              <img key={item.id} src={item.icon} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Footer