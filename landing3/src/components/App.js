import './App.css';
import Header from './Header';
import Main from './Main';
import ItemList from './ItemList';
import ShopList from './ShopList';
import Benefit from './Benefit';
import Event from './Event';
import Schedule from './Schedule';
import Safe from './Safe';
import Payment from './Payment';
import Timer from './Timer';
import Contact from './Contact';
import Submit from './Submit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <ItemList />
            <ShopList />
            <Benefit />
            <Event />
            <Schedule />
            <Safe />
            <Payment />
            <Timer />
            <Contact />
          </>
        } />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </Router>
  );
}

export default App;
