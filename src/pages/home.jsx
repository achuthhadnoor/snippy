import React from 'react'
import { connect } from 'react-redux'

import { taskAdd, getTasks } from '../store/actions/taskActions'
import { SignOut } from '../store/actions/authActions'

import Header from '../components/header'
import Tasks from '../components/tasks'
import Search from '../components/search'
import Toast from '../components/toast'

class Home extends React.Component {
    state = {
        task: ''
    }
    componentDidMount() {
        if (this.props.isOnline){
            this.props.getTasks();
        }
    } 
    render() { 
        return (
            <> 
            <Header/>
            <Tasks/>
            <Search/> 
            <Toast/>
            </>
        )
    }
}
const mapStateToProps = state => { 
    return ({
        isOnline:state.offline.online,
        tasks: state.tasks.tasks,
        errors:state.tasks.errors
    })
}
const mapDispatchtoProps = dispatch => {
    return {
        addTask: task => dispatch(taskAdd({ task })),
        getTasks: () =>{ dispatch(getTasks())},
        logout: () => dispatch(SignOut())
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(Home);