import SideBarPage from './Components/Views/SidebarPage';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ButtonPage from './Components/Views/ButtonPage';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<SideBarPage />} />
                <Route path='/Button' element={<ButtonPage />} />
                <Route path='/Accordion' element={<ButtonPage />} />
            </Routes>
        </div>
    );
}

export default App;
