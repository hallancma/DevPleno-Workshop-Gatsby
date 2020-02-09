import React from 'react';
import logoHero from '../assets/imgs/logo-hero.png';
const projetos = [1, 2, 3, 4, 5, 6];
const Projetos = () => {
  return (
    <div>
      <h2 className="ml-4 px-12 py-2 text-2xl font-bold sm:ml-16">
        Projetos de móveis planejados:
      </h2>
      <div className="flex flex-wrap items-center sm:flex-row  justify-center ">
        {projetos.map(() => {
          return (
            <div className="max-w-sm">
              <div className=" m-2 rounded shadow-lg">
                <img src={logoHero} alt="Projetos Realizados" />
                <div className="px-6 py-4">
                  <p className="font-bold text-xl mb-2">Projeto</p>
                  <p>Descrição</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projetos;
