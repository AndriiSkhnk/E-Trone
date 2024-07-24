import './index.css'
import { HomePage } from './components/Home/HomePage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { ComputersAndTablets } from './components/Computers&Tablets/Computers&Tablets';
import { CellPhones } from './components/CellPhones/CellPhones';
import { Audio } from './components/Audio/Audio';
import { CarElectronics } from './components/CarElectronics/CarElectronics';
import { WatchesPage } from './components/Watches/WatchesPage';
import { ProductPage} from './components/ProductPage/ProductPage'

function App() {


  return (
      <div className='wrap'>
        <HashRouter>
        <Header />
        <Navigation />
        <Routes>
            <Route path='/E-Trone/' element={<HomePage />} />
            <Route path='/Computers&Tablets' element={<ComputersAndTablets/>}/>
            <Route path='/CellPhones' element={<CellPhones/>} />
            <Route path='/Audio' element={<Audio/>} />
            <Route path='/CarElectronics' element={<CarElectronics/>} />
            <Route path='/Smartwatches' element={<WatchesPage/>} />
            <Route path='/product/:source/:id' element={<ProductPage/>}/>
        </Routes>
        <Footer />  
        </HashRouter>
      </div>
  );
}

export default App
