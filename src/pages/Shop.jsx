
import itemsData from '../itemsData.json'
import PlantCard from '../components/PlantCard'
import '../CSSfiles/Shop.css'

export default function Shop() {
    return (
        <div>
            <h1>Our plants</h1>
            <div className='grid'>
            {itemsData.map((item) => (
                <PlantCard
                    name={item.name}
                    price={item.price}
                    imageUrl={item.imageUrl}
                />))}

            </div>
            
        </div>
    )
}