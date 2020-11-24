import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Router, Switch, Route } from 'react-router-dom';

import AuthedRoute from './authedRoute';
import UnauthedRoute from './unauthedRoute'; 
import Home from '../pages/home';
import Login from '../pages/login';

class AppRouter extends Component {
    render() {
		return (
			<Router history={this.props.history}>
				<div className="app"> 
					<Switch>
						<AuthedRoute component={Home} exact path="/" />
						{/* Tasks routes */}
                        <AuthedRoute component={Home} exact path="/tasks" />
						<AuthedRoute component={Home}  path="/tasks/all" />
						<AuthedRoute component={Home}  path="/tasks/today" />
						<AuthedRoute component={Home}  path="/tasks/important" />
						<AuthedRoute component={Home}  path="/tasks/later" />
                        {/* --- */}
						<AuthedRoute component={Home}  exact path="/settings" />
						<AuthedRoute component={Home}  path="/settings/notifications" />
						<UnauthedRoute component={Login} exact path="/login" /> 
					</Switch> 
				</div>
			</Router>
		);
	}
}

AppRouter.propTypes = { 
	history: PropTypes.object.isRequired,
};
 

export default AppRouter;