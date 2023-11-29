import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/TopBar/Topbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Authentication from './pages/Authentication/Authentication';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/Main/Main';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route  path="/auth" element={<Authentication />} />
                    <Route>
                        <Route path="/" element={<Main />}>
                            <Route path="/" element={<Dashboard />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
