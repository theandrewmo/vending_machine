import { render, screen } from '@testing-library/react';
import Snack from './Snack';
import { MemoryRouter } from 'react-router-dom';
import snacks from './snacksArray';

//smoke test

it('renders a snack', ()=> {
    render(<MemoryRouter><Snack snack={snacks[0]}/></MemoryRouter>);
  });

