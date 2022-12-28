import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Detail() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const query = `
    query {
      Trail (id: "${id}") {
        id
        name
        status
        trees
        difficulty
      }
    }
  `;

  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  };

  useEffect(() => {
    setLoading(true);
    fetch('https://snowtooth.moonhighway.com', opts)
      .then((res) => res.json())
      .then((trails) => setData(trails))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1> Loading... </h1>;
  if (error) {
    return (
      <pre>
        {' '}
        {JSON.stringify(error)}
      </pre>
    );
  }
  if (!data) return <pre> No data</pre>;

  return (
    <div className="bg-gray-100">
      <Header />
      <h1>
        Trail:
        {data.data.Trail.name}
      </h1>
      <h3>
        IsTree:
        {data.data.Trail.trees ? 'TRUE' : 'FALSE'}
      </h3>
      <h3>
        Status:
        {data.data.Trail.status}
      </h3>
      <h3>
        Difficulty:
        {data.data.Trail.difficulty}
      </h3>
      <Footer />
    </div>
  );
}

export default Detail;
