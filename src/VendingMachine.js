import { Link } from 'react-router-dom'

/** Vending Machine - 
 * 
 * props: snacks - an array of snack objects
 * 
 * state: 
 * 
 */

const VendingMachine = ( { snacks }) => {
    return (
        <>  
            <h1>Vending Machine !!!</h1>
            <div className='snack-area'>
                <div className='snack-window'> 
                    {snacks.map(
                        snack => <Link 
                                    key={snack.snackId} 
                                    to={`/${snack.snackId}`}
                                 >
                                    <img 
                                        src={`${snack.image}`} 
                                        alt={snack.name}
                                    />
                                 </Link>
                    )}
                </div>
                <div className='dispenser-area'>
                </div>
            </div>
            <div className='feet'>
                <div className='left leg'></div>
                <div className='right leg'></div>
            </div>
        </>
    )
}

export default VendingMachine;