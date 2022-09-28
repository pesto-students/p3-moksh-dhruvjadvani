import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './store/counterDispatch';

function App(props) {
    console.log(props);
    const { counter, increment, reset } = props;
    return (
        <div className='App'>
            <h1>{counter}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={reset}>Reset</Button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
