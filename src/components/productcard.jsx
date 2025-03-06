// write product card here
import React from 'react'
import Button from './button.jsx';
const productcard = () => {
  const image ="https://shorturl.at/zPGhL";
  const name = "Product Name";
  const price = "$99.99";
  return (
    <>
      <div>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{price}</p>
        <Button />
      </div>
    </>
  );
}

export default productcard