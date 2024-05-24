
import CartButton from "../event components/CartButton";
import '../CSSfiles/Shop.css'

function PlantCard({ id, name, price, imageUrl }) {
  return (
    <div className ="grid">
    <div className="card">
      <img className="img" src={imageUrl} alt="no pic :(" />
      <h2>{name}</h2>
      <h3>${price.toFixed(2)}</h3>
      <CartButton />
      </div>

    </div>

  );
}

export default PlantCard;