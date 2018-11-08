import React from 'react';
import {Provider} from 'react-redux';
import Button from '@material-ui/core/Button';

export default class Root extends React.Component {

    state = {
        store: this.props.store,
        globalEventDistributor: this.props.globalEventDistributor,
    };

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    addAlert = () => {
        this.state.globalEventDistributor.dispatch({type: 'ADD_ALERT', payload: 'Message from app2'});
    };

    changeMessage = () => {
        this.state.globalEventDistributor.dispatch({type: 'APP1_UPDATE_MESSAGE', payload: 'Message from app2'});
    };

    render() {
        if (this.state.store && this.state.globalEventDistributor) {
            return (
                <Provider store={this.state.store}>
                    <div>
                        <h1>Welcome to APP2!</h1>
                        <Button variant="contained" color="primary" onClick={this.addAlert}> Alert APP2 </Button>
                        <Button variant="contained" color="primary" onClick={this.changeMessage}> Change message app1 </Button>
                    </div>
                </Provider>
            )
        }

        return <div/>;
    }
}
