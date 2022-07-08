/* eslint-disable max-len */
import React from 'react';
import { GoogleOutlined, GithubOutlined, AntDesignOutlined } from '@ant-design/icons';
import Navbar from '../components/navbar/navbar';

import '../assets/styles/contact.css';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="container">
          <div className="boxContact">
            <h1 className="title">CONTACT</h1>
          </div>
          <div className="contents">
            <div className="mainBox">
              <h2 className="titleAction">Sponsor</h2>
              <div className="boxIcon">
                <GoogleOutlined className="icon" />
                <GithubOutlined className="icon" />
                <AntDesignOutlined className="icon" />
              </div>
            </div>
            <div className="secondBox">
              <h2 className="titleAction">Information</h2>
              <p className="textEmail">lorem@mail.com</p>
              <h2 className="location">Location</h2>
              <h2>Jakarta | Indonesia</h2>
              <p className="address">Jalan Jendral Sudirman No. 23 | M. Andara | Jalan Mersan No. 234 | Kota Jakarta Pusat</p>
              <h4>contact</h4>
              <p>+6282-2342-2121</p>

              <h2>Yogyakarta | Indonesia</h2>
              <p className="address">Maroko Timur No. 23</p>
              <h4>contact</h4>
              <p>+6282-2342-2121</p>
            </div>
            <div className="thridBox">
              <h2 className="titleAction">Contact</h2>
              <p className="textEmail">lorem@mail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
