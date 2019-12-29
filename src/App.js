import React from 'react';
import './App.css';
import CounterContainer from "./components/CounterContainer";

class App extends React.Component {
    render() {


        return (
            <div className="App">
                <CounterContainer/>
            </div>
        );
    }
}

export default App;
