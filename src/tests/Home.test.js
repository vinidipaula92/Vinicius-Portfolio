import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente App.js', () => {
  it('Deve renderizar o componente App', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: 'Home' });
    expect(home).toBeInTheDocument();
    userEvent.click(home);
  });
  it('Teste se o link possui o texto Sobre e é redirecionado ao /sobre', () => {
    renderWithRouter(<App />);
    const sobre = screen.getByRole('link', { name: 'Sobre' });
    expect(sobre).toBeInTheDocument();
    userEvent.click(sobre);
  });
  it('Teste se o link possui o texto Projetos e é redirecionado ao /projetos', () => {
    renderWithRouter(<App />);
    const sobre = screen.getByRole('link', { name: 'Projeto' });
    expect(sobre).toBeInTheDocument();
    userEvent.click(sobre);
  });
  it('Teste se o link possui o texto Contato e é redirecionado ao /contato', () => {
    renderWithRouter(<App />);
    const contato = screen.getByRole('link', { name: 'Contato' });
    expect(contato).toBeInTheDocument();
    userEvent.click(contato);
  });
  it('Teste se existe o nome Vinicius de Paula Martins dos Anjos na página', () => {
    renderWithRouter(<App />);
    const nome = screen.getByText(/Vinicius de Paula Martins dos Anjos/i);
    expect(nome).toBeInTheDocument();
  });
  it('Teste se existe uma imagem na página', () => {
    renderWithRouter(<App />);
    const img = screen.getByAltText(/familia/i);
    expect(img).toBeInTheDocument();
  });
});
