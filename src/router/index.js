import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthedRoute from './authedRoute';
import UnauthedRoute from './unAuthedRoute';  
 
import Home from '../pages/home';
import Login from '../pages/login';

class AppRouter extends Component { 

	render() { 
		return (
			<Router >
				<div className="app">
					<Switch>
						<AuthedRoute component={Home} exact path="/" />
						<UnauthedRoute
							component={Login}
							exact
							path="/Login"
						/> 
						<Route render={()=><div>Not found anything</div>} />
					</Switch>
				</div>
			</Router>
		);
	}
}

AppRouter.propTypes = {
	dispatch: PropTypes.func.isRequired, 
};

const mapStateToProps = (state) => { 
    return({ user: state.firebase.auth })
};

export default connect(mapStateToProps)(AppRouter);