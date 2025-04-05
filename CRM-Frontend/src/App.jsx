import { useEffect } from 'react'
import axios from 'axios'
import './App.css'
import AppRoutes from './routes/index'
import { APIS } from 'googleapis/build/src/apis'

function App() {

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/clients/')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
