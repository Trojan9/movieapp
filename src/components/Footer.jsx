import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import "../components/Footer.css"
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Play's movie streaming app All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer