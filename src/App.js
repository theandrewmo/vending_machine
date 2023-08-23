import './App.css';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import snacks from './snacksArray';
import Snack from './Snack';
import VendingMachine from './VendingMachine';

function App() {

  // const [snacks, setSnacks] = useState(snacksArray)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          {/* vending machine routes */}
          <Route path='/' element={<VendingMachine snacks={snacks} />}/>
          
          {/* snack routes */}
          {snacks.map(snack => 
            <Route 
              key={snack.snackId} 
              path={`/${snack.snackId}`} 
              element={<Snack snack={snack}/>}
            />)}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
