import React from 'react';
import logoHero from '../assets/imgs/logo-hero.png';
const Hero = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
      <div className="p-8">
        <h2 className="font-bold text-2xl">Móveis Planejados</h2>
        <p className="text-xl">
          Comerciais e residenciais para todos os ambientes
        </p>
        <p className="text-gray-700">Atendemos Ubatuba e toda região</p>
      </div>
      <div>
        <img
          className="object-fit: cover;"
          src={logoHero}
          alt="Móveis Planejados"
        />
      </div>
    </div>
  );
};

export default Hero;
