import { render, screen } from '@testing-library/react';
import VendingMachine from './VendingMachine';
import snacks from './snacksArray';
import { MemoryRouter } from 'react-router-dom';

//smoke test

it('renders a vending machine', ()=> {
    render(<MemoryRouter><VendingMachine snacks={snacks} /></MemoryRouter>);
  });