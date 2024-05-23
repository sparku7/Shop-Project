
import itemsData from '../itemsData.json'
import PlantCard from '../components/PlantCard'

export default function Shop() {
    return (
        <div>
            <h1>Our plants</h1>
            {itemsData.map((item) => (
        <PlantCard
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          />
            ))} 
        </div>
    )
}