import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import { getAllData } from '../api'; 
import AuthedRoute from '../router/authedRoute'
import UnAuthedRoute from '../router/unAuthedRoute'
import home from '../pages/home';
import login from '../pages/login';
import Theme from '../components/Theme';

class AppRouter extends Component {
	componentDidMount() {
		getAllData(this.props.dispatch);
	}

	render() {
		return (
            <Theme>
			<Router history={this.props.history}> 
					<Switch>
                        <Route component={login} path="/login"/> 
						<Route component={home}  path="/" /> 
					</Switch>  
			</Router> 
            </Theme>
		);
	}
}

AppRouter.propTypes = {
	dispatch: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(AppRouter);