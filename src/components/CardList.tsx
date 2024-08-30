/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';
import { useFetchCards } from '../hooks/useFetchCards';
import { useDrawerStore } from '../store/useDrawerStore';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Card = styled.div`
  width: 200px;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const CardList: React.FC = () => {
  const { cards, loading, error } = useFetchCards();
  const { openDrawer } = useDrawerStore();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <CardContainer>
      {cards.map((card: any) => (
        <Card key={card.id} onClick={() => openDrawer(card.id)}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </Card>
      ))}
    </CardContainer>
  );
};