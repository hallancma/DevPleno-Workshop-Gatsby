import React from 'react';

const Contador = ({ pageContext }) => {
  return (
    <div>
      <h1>Contador</h1>
      <p>Outros dados 2</p>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </div>
  );
};
export default Contador;
