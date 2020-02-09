import React from 'react';
import seloImg from '../assets/imgs/garantia.png';

const selos = [1, 2, 3, 4];
const Selo = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row justify-around my-3">
      {selos.map(() => {
        return <img className="my-4" src={seloImg} alt="" />;
      })}
    </div>
  );
};
export default Selo;
