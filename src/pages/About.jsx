/* eslint-disable max-len */
import React from 'react';
import Navbar from '../components/navbar/navbar';
import '../assets/styles/about.css';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="container">
          <div className="box">
            <h1 className="title">About</h1>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci modi, molestiae amet qui illum quisquam corporis, quia tempora ipsa pariatur aliquam assumenda aspernatur incidunt reiciendis vero, tempore consectetur! Illo.</p>
          </div>
        </div>
        <div className="jumbotron">
          <div className="mainBox">
            <div className="mainContent" />
            <div className="content">
              <h1 className="titleContent">History</h1>
              <hr className="lineSecond" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat error dolores, odit voluptates possimus corporis perspiciatis ipsam explicabo, aspernatur, aliquid iste id dolor at totam assumenda! Tempora, temporibus sed?</p>
            </div>
          </div>
          <div className="secondBox">
            <div className="content">
              <h1 className="titleContent">CEO</h1>
              <hr className="line" />
              <h1 className="name">Alexander Mosca L</h1>
              <p className="position">Lorem Chief Executive Officer (CEO)</p>
            </div>
            <div className="thridBox" />
          </div>
        </div>
      </div>
    </>
  );
}
