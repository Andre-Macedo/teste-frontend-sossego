import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout"
import UserForm from "./pages/UserForm";
import AddressForm from './pages/AdressForm';
import AboutForm from './pages/AdressForm';
import './App.css';

function App() {
  return (
    // <Routes>
    //   <Route path='/' element={<Layout />}>
    //     <Route index element={<UserForm />} />
    //     <Route path="/address-user" element={<AddressForm />} />
    //     <Route path="/about-user" element={<AboutForm />} />
    //   </Route>
    // </Routes>
    <Layout />
  );
}

export default App;
