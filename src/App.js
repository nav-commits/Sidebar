import SideBarPage from './Components/Views/SidebarPage';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<SideBarPage />} />
            </Routes>
        </div>
    );
}

export default App;
