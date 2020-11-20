import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import { getAllData } from '../api'; 
import AuthedRoute from '../router/authedRoute'
import UnAuthedRoute from '../router/unAuthedRoute'
import home from '../pages/home';
import login from '../pages/login';
import { ThemeProvider, createGlobalStyle } from 'styled-components'; 

const theme = {
    background:'#121212',
    color:'#f8f8f8'
}
const GlobalStyles = createGlobalStyle`
    body{
        background:${props=>props.theme.background};
        color:${props=>props.theme.color};
        font-size: 16px;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizelegibility;
        user-select: none;
        text-size-adjust: none;
        cursor: default;
        font-family:sans-serif;
    }
    button{
        border:none;
        outline:none;
        cursor:pointer; 
    }
`


class AppRouter extends Component {
	componentDidMount() {
		getAllData(this.props.dispatch);
	}

	render() {
		return (
            <ThemeProvider theme={theme}>
			<Router history={this.props.history}> 
					<Switch>
                        <UnAuthedRoute component={login} path="/login"/> 
						<AuthedRoute component={home} exact path="/" />
					</Switch>  
			</Router>
            <GlobalStyles/>
            </ThemeProvider>
		);
	}
}

AppRouter.propTypes = {
	dispatch: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(AppRouter);