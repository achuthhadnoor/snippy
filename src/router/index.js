import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthedRoute from './authedRoute';
import UnauthedRoute from './unAuthedRoute';

import Home from '../pages/home';
import Login from '../pages/login';    
import GlobalStyles from '../utils/global'  
import { getAllData } from '../api';
import ThemedWrapper from '../components/themedWrapper';


class AppRouter extends Component {  
    componentDidMount(){  
            getAllData(this.props.dispatch); 
    }
    
    render() {
        return (
            <ThemedWrapper>
                <Router >
                    <div className="app">
                        <Switch>
                            <AuthedRoute component={Home} exact path="/" />
                            <UnauthedRoute
                                component={Login}
                                exact
                                path="/Login"
                            />
                            <Route render={() => <div>Not found anything</div>} />
                        </Switch>
                    </div>
                </Router>
                <GlobalStyles/>
            </ThemedWrapper>
        );
    }
}

AppRouter.propTypes = {
	dispatch: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ user: state.user }) 

export default connect(mapStateToProps)(AppRouter);