import { useEffect } from 'react';
import { crearTablaTutorias } from './database/Database';

export default function App() {
  useEffect(() => {
    crearTablaTutorias(); // ← CREA LA TABLA AL INICIAR
  }, []);

  return (
    <Navigation /> 
  );
}
