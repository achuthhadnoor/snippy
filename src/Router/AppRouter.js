import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import AuthedRoute from './AuthedRoute';
import UnauthedRoute from './UnauthedRoute'; 
import Login from '../Pages/login'
import Home from '../Pages/home'
import { getAllData } from './../api';

class AppRouter extends Component {
	componentDidMount() {
		getAllData(this.props.dispatch);
	}

	render() {
		return (
			<Router history={this.props.history}>
					<AuthedRoute component={Header} redirect={false} showLoader={false} />
					<Switch>
						<AuthedRoute component={Home} exact path="/" />
						{/* <AuthedRoute component={PodcastsView} exact path="/podcasts" />
						<AuthedRoute
							component={PodcastsView}
							path="/podcasts/:podcastID"
						/>
						<AuthedRoute component={RSSFeedsView} exact path="/rss" />
						<AuthedRoute component={RSSFeedsView} path="/rss/:rssFeedID" />

						<Route
							component={FoldersView}
							path="/folders/:folderID/r/:rssFeedID/a/:articleID"
						/>
						<Route
							component={FoldersView}
							path="/folders/:folderID/p/:podcastID/e/:episodeID"
						/>
						<AuthedRoute
							component={FoldersView}
							path="/folders/:folderID/p/:podcastID"
						/>
						<AuthedRoute
							component={FoldersView}
							path="/folders/:folderID/r/:rssFeedID"
						/>
						<AuthedRoute component={FoldersView} path="/folders/:folderID" />
						<AuthedRoute component={FoldersView} exact path="/folders" />
						<AuthedRoute component={FoldersView} path="/tags/:tagID" />
						<AuthedRoute component={AdminView} path="/admin" /> */}
						<UnauthedRoute component={Login} exact path="/login" /> 
						 
						<Route component={NotFound} />
					</Switch>
					<AuthedRoute component={Player} redirect={false} showLoader={false} />
			</Router>
		);
	}
}

AppRouter.propTypes = {
	dispatch: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(AppRouter);