import { useState } from "react";

function CartButton() {
    const [inCart, setInCart] = useState('InCart');
  
    const whenClick = () => {
      setInCart(!inCart);
      
    };
  
    return (
      <button onClick={whenClick}>
        {inCart ? 'In Cart' : 'Add to Cart'}
      </button>
    );
  }

  export default CartButton