import React from 'react';
import Colors from './Colors';

export default function App() {
  return (
    <>
      <Colors colors={[{ name: 'Red', hex: '#FF0000', rgb: '255,0,0' }, { name: 'Green', hex: '#008000', rgb: '0,128,0' }]}/>
    </>
  );
}
