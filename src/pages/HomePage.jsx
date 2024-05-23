import { Link } from 'react-router-dom'
export default function HomePage() {
    return (
        <div className='container'>
            <div className='hometext'>
            <h3>Bring your home to life.</h3>
            <p className='textclass'>Elevate your living space with a touch of nature.</p>
            <p className='textclass'>We offer a range of easy-care houseplants</p>
            <button className='browseplant'><Link to="./shop">Browse plants</Link></button>
            </div>
            <div className='homeimage'>
                <img className='imageclass' src="https://user-images.githubusercontent.com/118732445/203775030-f6d39588-6b73-42eb-a396-d50098078501.jpg" />
            </div>
        </div>
    )
}