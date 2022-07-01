import logo from './logo.svg';
import './App.css';
import Header from './component/Header-Component/Header'
import { Routes ,Route} from 'react-router-dom';
import LandingPage from './component';
import ProductDetails from './component/Product/ProductDetails';
import Cart from './component/Cart/Cart';
import PaymentResponse from './component/Cart/PaymentResponse';
import Login from './component/Login/Login';

function App() {
  return (
    <>
     
      <section>
        <Routes>
          <Route path="/estore/*" element={<LandingPage/>}/>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </section>
    </>
    
  );
}

export default App;
