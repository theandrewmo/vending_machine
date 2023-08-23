import { Link } from 'react-router-dom'

/** Snack - snack in a vending machine
 * 
 * props: { snack object }
 * 
 * state: none
 * 
 */

const Snack = ( { snack }) => {

    return (
        <>
        <h2>{snack.name}</h2>
        <img src={`${snack.image}`} alt={snack.name}></img>
        <h3>Brand: {snack.brand}</h3>
        <h4>Serving size: {snack.servingSize}</h4> 
        <h4> Calories: {snack.calories}</h4>
        <Link to='/' className='btn'>Back to Vending Machine</Link>
        </>

    )
}

export default Snack;