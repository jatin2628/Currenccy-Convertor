import { useState, useEffect } from 'react';

function useCurrency(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // It's a good practice to handle potential errors in network requests.
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData[currency]); // Assuming you want to keep the entire response object
      } catch (error) {
        console.error('Error fetching currency data:', error);
        setData({}); // Reset data on error, or handle errors as needed
      }
    };

    fetchCurrencyData();
  }, [currency]); // Effect runs only when `currency` changes.

  return data;
}

export default useCurrency;
