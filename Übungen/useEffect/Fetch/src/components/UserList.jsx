import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        // console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error('error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //   if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Users:</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ol>
          {users.map((user) => (
            <li key={user.id}>
              <p>{user.name}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default UserList;
