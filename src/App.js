import './App.css';

import Nav from './components/Nav';
import { Routes, Route, Link } from "react-router-dom";
import VotingRoom from './components/VotingRoom';
import Results from './components/Results';

function App() {
    return (
        <div className="App" >
            <header className="container" >
                <Nav className="mb-5 pb-5" />
                <Routes >
                    <Route path="/"
                        element={< VotingRoom />}
                    />
                    <Route path="/results"
                        element={< Results />}
                    />
                </Routes>
            </header>
        </div>
    );
}

export default App;