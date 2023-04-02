import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id != id));
  };
  const fetchTours = () => {
    setLoading(true);
    return fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      });
  };
  const handleReload = () => {
    fetchTours();
  };
  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <main>
      {loading && <Loading></Loading>}
      {!loading && <Tours tours={tours} removeTour={removeTour}></Tours>}
      {tours.length == 0 && !loading && (
        <button className='btn btn-block' onClick={handleReload}>
          Reload
        </button>
      )}
    </main>
  );
};
export default App;
