import { useEffect, useState } from 'react'
import { ContactCardData } from '../interfaces/ContactCardProps'
import fetchContactCardsData from './fetchContactCardsData.ts'
import { AxiosError } from 'axios';
import ContactCard from '../components/ContactCard';

export default function renderContactCards() {
  const [contactCardData, setContactCardData] = useState<ContactCardData[] | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchContactCardsData();
        setContactCardData(result);
      } catch (error: AxiosError | unknown) {
        setError(error as AxiosError);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) return <div> Loading... </div>;
  if (error) return <div> Error: {error.message}</div>;
  if (!contactCardData) return null;

  return (
      contactCardData.map((item: ContactCardData, index: number) => {
        return <ContactCard key={index}
          id={item.id}
          name={item.name}
          email={item.email}
          phone={item.phone}
          cpf={item.cpf}
        />
      })
  );
}

