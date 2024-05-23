
function PlantCard({ id, name, price, imageUrl }) {
    return (
      <div className="card">
            <img className="img" src={imageUrl} alt="no pic :(" />
            <h2>{name}</h2>
            <h3>${price.toFixed(2)}</h3>
            <button>Add to Cart</button>
           
          </div>
       
    );
  }
   
  export default PlantCard;