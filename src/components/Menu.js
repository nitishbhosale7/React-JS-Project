import '../index.css'
import pizzaData from './data'
export default function Menu(props) {
    console.log('nitish')
    console.log(pizzaData)
    return (<main className='menu'>
        <h2>Our Menu</h2>
        {pizzaData.length > 0 ? (
            <>
                <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
                <ul className='pizzas'>
                    {pizzaData.map((pizza) => {
                        return <Pizza key={pizza.name} pizza={pizza} />
                    })}
                </ul>
            </>

        ): <p>We are currently working on our menu. Please try again later</p>}
        
    </main>)
}


function Pizza({ pizza }) {
    // destructured the props into the pizza 

    return (
        <li className={`pizza ${pizza.soldOut?'sold-out' : ''}`}>
            <img src={pizza.photoName} alt={pizza.name} />
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.soldOut ? 'SOLD OUT':  pizza.price}</span>
            </div>
        </li>);
}