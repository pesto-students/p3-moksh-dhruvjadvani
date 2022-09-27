import { useState } from 'react';
import { connect } from 'react-redux';
function App(props) {
    const { light, dispatch } = props;

    const switchLight = () => {
        dispatch({ type: 'SWITCH' });
    };

    const lightedness = light ? 'lit' : 'dark';

    return (
        <div className={`App ${lightedness}`}>
            <h1>Light Switch : {lightedness}</h1>
            <button onClick={switchLight}>Switch</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        light: state,
    };
}

export default connect(mapStateToProps)(App);
