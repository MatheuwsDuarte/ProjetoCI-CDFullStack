import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App Component', () => {
  it('deve renderizar o título Vite + React', () => {
    //Renderiza o componente App
    render(<App />);
    
    //Procura por um elemento que contenha o texto "Vite + React"
    // (Geralmente é um h1 na template padrão do Vite)
    const headline = screen.getByText(/Vite \+ React/i);
    
    //Verifica se o elemento está no documento
    expect(headline).toBeInTheDocument();
  });
});
