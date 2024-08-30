// src/App.tsx
import React from 'react';
import { Drawer } from './components/Drawer';
// import { DrawerToggleButton } from './components/DrawerToggleButton';
import { CardList } from './components/CardList';

const App: React.FC = () => {
  return (
    <div>
     <CardList />
     <Drawer />
    </div>
  );
};

export default App;
