import React from 'react';
import { useDrawerStore } from '../store/useDrawerStore';

export const DrawerToggleButton: React.FC = () => {
  const { toggleDrawer } = useDrawerStore();

  return (
    <button onClick={toggleDrawer}>
      Toggle Drawer
    </button>
  );
};