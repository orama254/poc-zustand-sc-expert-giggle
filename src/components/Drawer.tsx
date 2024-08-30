import React from 'react';
import styled from 'styled-components';
import { useDrawerStore } from '../store/useDrawerStore';

const DrawerContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  height: 100%;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
`;

const DrawerContent = styled.div`
  padding: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const Drawer: React.FC = () => {
  const { isOpen, closeDrawer, selectedCard, loading, error } = useDrawerStore();

  return (
    <DrawerContainer isOpen={isOpen}>
      <CloseButton onClick={closeDrawer}>&times;</CloseButton>
      <DrawerContent>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {selectedCard && (
          <>
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.body}</p>
            {/* Replace `body` with appropriate field names if using a different API */}
            <p><strong>Additional Info:</strong> {selectedCard.additionalInfo}</p>
            {/* Add more fields as necessary */}
          </>
        )}
      </DrawerContent>
    </DrawerContainer>
  );
};