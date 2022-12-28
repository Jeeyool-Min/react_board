import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
import Post from './Post';
import Pager from './Pager';

const query = `
  query {
    allTrails {
      id
      name
  }
}
`;

const opts = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query }),
};

function List() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 false">
      <Aside />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <div className="body container max-w-3xl px-4 mx-auto sm:px-8">
          <div className="py-4">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Created
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.data.allTrails.map((trail) => (
                      <tr>
                        <Post id={trail.id} key={trail.id} name={trail.name} />
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pager />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
