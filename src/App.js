import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardComponent from './Components/Card';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, selectUsers } from './Store/Users';

const url= "https://jsonplaceholder.typicode.com"

function App() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  function filterData(users) {
    return users.filter((user) => {
      return user.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  function handlePutRequest() {
    axios
      .put(`${url}/users_error`)
      .then((response) => console.log(response))
      .catch((error) => {
        console.log('Error:', error);
        toast.error('Failed to send PUT request!', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  }

  console.log('users:', users);
  console.log('searchQuery:', searchQuery);

  return (
    <div className='p-2 flex flex-col gap-5'>
      <ToastContainer />
      <div className='flex gap-3'>
        <Button variant="contained" onClick={() => dispatch(fetchUsers())}>Fetch Users</Button>
        <Button variant="contained" onClick={handlePutRequest}>Send PUT Request</Button>
      </div>
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearch}
      />
      <CardComponent users={filterData(users)} />
    </div>
  );
}

export default App;
