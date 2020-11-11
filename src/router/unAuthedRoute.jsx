import { Redirect, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

const UnauthedRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (!window.localStorage.getItem('authedUser')) {
					return <Component {...props} />;
				} else if (rest.redirect) {
					return <Redirect to="/" />;
				}
			}}
		/>
	);
};

UnauthedRoute.defaultProps = {
	redirect: true,
};

UnauthedRoute.propTypes = {
	component: PropTypes.elementType,
};

const mapStatetoProps = state=>({
    uid : state.firebase.auth.uid
})

export default compose( withRouter,connect(mapStatetoProps))(UnauthedRoute);