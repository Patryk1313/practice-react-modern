import React from 'react';
import Box from './Box';
import TextContext from '../context/context';

class App extends React.Component {
    state = {
        render() {
            const { text } = this.state;
            const { Provider } = TextContext;

            return (
                <Provider value={text}>
                    <Box />
                </Provider>
            );
        },
    };
}
