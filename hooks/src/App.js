import './App.css';

import ManagerMusic from './components/To-Do-App/ManagerMusic';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer theme="colored" />
      <ManagerMusic/>
    </>
  );
}

export default App;
