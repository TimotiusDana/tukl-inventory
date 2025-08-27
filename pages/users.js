import { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
    const [ users, setUsers ] = useState([]);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            setUsers(response.data);
        } catch (error){
            console.error(error);
        }
    };

    const handleCreateUser = async () => {
        try {
            await axios.post('/api/users', { name, email });
            getUsers();
            setName('');
            setEmail('');
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/users/${id}`);
            getUsers();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
      <h1>Daftar Pengguna</h1>
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Tambah Pengguna</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleDelete(user.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default Users;