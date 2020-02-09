import React from 'react';
import BtnWhatsapp from '../components/BtnWhatsapp';
const Footer = () => {
  return (
    <div className="p-4 bg-gray-200 sm:flex justify-between items-center">
      <div>
        <h5>Lima Móveis</h5>
        <p>Rual xyz, bairro s</p>
      </div>
      <BtnWhatsapp />
    </div>
  );
};

export default Footer;
