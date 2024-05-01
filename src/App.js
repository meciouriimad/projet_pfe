import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigationbar from './Navigationbar';
import CarouselPage from './CarouselPage'
import CardPage from './CardPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ListeOuvrage from './ListeOuvrage';
import Login from './Login';
import FormDemandeOuv from './FormDemandeOuv';
import FormDemandeNor from './FormDemandeNor';
import FormOuvrage from './FormOuvrage';
import FormNorme from './FormNorme';
import FormStagiaire from './FormStagiaire';
import Footer from './Footer'; 
import ListeNorme from './ListeNorme';
import NavigationbarAdmin from './NavigationbarAdmin';
import ListeConsultation from './ListeConsultation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationbarAdmin/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/carousel' element={<CarouselPage/>}></Route>
          <Route path='/card' element={<CardPage/>}></Route>
          <Route path='/FormDemandeOuv' element={<FormDemandeOuv/>}></Route>
          <Route path='/FormDemandeNor' element={<FormDemandeNor/>}></Route>
          <Route path='/ListeOuvrage' element={<ListeOuvrage/>}></Route>
          <Route path='/ListeNorme' element={<ListeNorme  />}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/FormOuvrage' element={<FormOuvrage/>}></Route>
          <Route path='/FormNorme' element={<FormNorme/>}></Route>
          <Route path='/FormStagiaire' element={<FormStagiaire/>}></Route>
          <Route path='/ListeConsultation' element={<ListeConsultation/>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

