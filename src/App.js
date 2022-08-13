import React from 'react';
import './App.scss';
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'

function App() {
    return (
        <React.Fragment>
            <Header />
            <div style={{width: "100%", height: "500px"}}></div>
            <Footer />
        </React.Fragment>
    );
}

export default App;
