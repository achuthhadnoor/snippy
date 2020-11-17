import React from 'react'
import { connect } from 'react-redux'

import { taskAdd, getTasks } from '../store/actions/taskActions'
import { SignOut } from '../store/actions/authActions'

import Header from './header' 
import Search from './search'
import Toast from './toast'

class Tasks extends React.Component {
    state = {
        task: ''
    } 
    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }
    onsubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task:''
        })
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
export default connect(mapStateToProps,mapDispatchtoProps)(Tasks);