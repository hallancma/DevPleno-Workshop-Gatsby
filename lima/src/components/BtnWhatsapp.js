import React from 'react';
import wa from '../assets/imgs/btn-icon-whats.png';
const BtnWhatsapp = () => {
  return (
    <div className="bg-white shadow rounded px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row">
      <img src={wa} alt="Whatsapp" className=".object-cover h-24" />
      <div className="ml-2">
        <h3 className="font-bold text-2xl">Orçar Seu Projeto!</h3>
        <p className="text-xs">Projeto e orçamento sem compromisso.</p>
        <p className="font-bold">(12) 9999-9999</p>
      </div>
    </div>
  );
};
export default BtnWhatsapp;
