import { useState, useEffect } from 'react';

interface Card {
  id: number;
  title: string;
  body: string; // JSONPlaceholder uses `body` instead of `description`
}

export const useFetchCards = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setCards(data);
      } catch (err) {
        setError('Failed to fetch cards');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return { cards, loading, error };
};