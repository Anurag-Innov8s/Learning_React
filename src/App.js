import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import Home from './Components/Home/Home';
import AI from './Components/AI/AI';
import AIS from './Components/AIspain/AIS'
import ML from './Components/ML/ML'
import Mls from './Components/MLspain/Mls';
import Dl from './Components/DL/Dl'
import Dls from './Components/Dls/Dls'
import Ann from './Components/ANN/Ann'
import AnnS from './Components/AnnS/Anns'
import Thankyou from './Components/Thankyou/Thankyou';
import HomeS from './Components/Homespain/HomeS'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/home/spain' element={<HomeS></HomeS>}></Route>
        <Route path='/read/AI' element={<AI></AI>}></Route>
        <Route path='/read/AI/spanish' element={<AIS></AIS>}></Route>
        <Route path='/read/Ml' element={<ML></ML>}></Route>
        <Route path='/read/Ml/spanish' element={<Mls></Mls>}></Route>
        <Route path='/read/ann' element={<Ann></Ann>}></Route>
        <Route path='/read/ann/spanish' element={<AnnS></AnnS>}></Route>
        <Route path='/read/Dl' element={<Dl></Dl>}></Route>
        <Route path='/read/Dl/spanish' element={<Dls></Dls>}></Route>
        <Route path='/thankyou' element={<Thankyou></Thankyou>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
