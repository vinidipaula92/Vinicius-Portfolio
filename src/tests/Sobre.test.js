import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const url = '/sobre';
describe('Teste a página Sobre.js', () => {
  it('Teste se existe na pagina duas imagens', () => {
    const { history } = renderWithRouter(<App />);
    history.push(url);
    const img = screen.getAllByRole('img');
    expect(img).toHaveLength(2);
  });
  it('Teste se na página existe um botão para ir para página de projetos', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/projetos');
    const sobre = screen.getByRole('link', { name: 'Projeto' });
    expect(sobre).toBeInTheDocument();
    userEvent.click(sobre);
  });
});
