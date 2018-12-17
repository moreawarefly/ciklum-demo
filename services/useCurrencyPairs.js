import { useState, useEffect } from 'react';
import decorateCurrencyPairName from '../utils/decorateCurrencyPairName';

function mapResponse(response) {
  if (response) {
    return response.map((item) => (
      {
        key: item.pair,
        value: item.pair,
        label: decorateCurrencyPairName(item.pair),
      }
    ));
  }
}

function useCurrencyPairs() {
  const url = '/static/pairs.json';
  const [data, setData] = useState();
  // const [error, setError] = useState();

  async function fetchData() {
    // try {
    const response = await fetch(url);
    const responseData = await response.json();
    setData(responseData);
    // } catch (e) {
    //   console.error(e)
    // }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return mapResponse(data);
}

export default useCurrencyPairs;
