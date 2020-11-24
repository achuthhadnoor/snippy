import { Redirect, Route, withRouter } from 'react-router-dom';
import Loader from '../components/Loader';
import PropTypes from 'prop-types';
import React from 'react'; 
import { useAuth } from '../hooks/use-auth';
 
        const AuthedRoute = ()=>{
		const { component, ...rest } = this.props;
		const Component = component;
        const {user} = useAuth();
		return (
            <Route
            {...rest}
            render={(props) => { 
                if (!localStorage['authedUser']) {
						if (this.props.redirect) {
							return <Redirect to="/login" />;
						} else {
							return <div />;
						}
					} else if (!user) {
						if (this.props.showLoader) {
							return <Loader />;
						} else {
							return <div />;
						}
					} else {
						return <Component {...props} />;
					}
				}}
			/>
		);
	}
 
AuthedRoute.defaultProps = {
	redirect: true,
	showLoader: true,
};

AuthedRoute.propTypes = {
	component: PropTypes.elementType,
	redirect: PropTypes.bool,
	showLoader: PropTypes.bool
};
 

export default withRouter(AuthedRoute);