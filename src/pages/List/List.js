import React, {useEffect, useState} from "react";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Post from '../../pages/List/Post';

const query = `
  query {
    allTrails {
      id
      name
  }
}
`;

const opts = {
  method: "POST",
  headers: { "Content-Type" : "application/json" },
  body: JSON.stringify({ query })
};

function List() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://snowtooth.moonhighway.com`,
      opts
    )
      .then(res => res.json())
      .then(data => setData(data))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1> Loading... </h1>;
  if (error) return <pre> {JSON.stringify(error)}</pre>;
  if (!data) return <pre> No data</pre>;
  return (
    <>
      <Header />
        <h1> List </h1>
        <table>
          <thead>
            <tr>
              <th> ID </th>
              <th> Name </th>
            </tr>
          </thead>
          <tbody>
            {data.data.allTrails.map((trail) => (
              <tr> 
                <Post
                  id={trail.id}
                  key={trail.id}
                  name={trail.name}
                />
              </tr>
            ))}
          </tbody>
        </table>
      <Footer/>
    </>
  );
}

export default List;