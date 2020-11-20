import React from 'react'
import { connect } from 'react-redux'

import { taskAdd, getTasks } from '../store/actions/taskActions'

import Header from '../components/header'
import Tasks from '../components/tasks'
import Search from '../components/search'
import Toast from '../components/toast'
import Sidebar from '../components/sidebar'
import { logOut } from '../store/actions/userActions' 

class Home extends React.Component {
    state = {
        task: ''
    }
    componentDidMount() {
        // if (this.props.isOnline){
            // this.props.getTasks();
        // }
    } 
    render() { 
        return (
            <div style={{display:'flex'}}>
            <Sidebar/>   
            <div style={{flex:1}}>
            <Header/>
            {/* <Tasks/> */}
            <Search/> 
            <Toast/>
            </div>
            </div>
        )
    }
}
const mapStateToProps = state => { 
    return ({
        // isOnline:state.offline.online,
        tasks: state.tasks.tasks,
        errors:state.tasks.errors
    })
}
const mapDispatchtoProps = dispatch => {
    return {
        addTask: task => dispatch(taskAdd({ task })),
        getTasks: () =>{ dispatch(getTasks())} ,
        logOut : ()=>{dispatch(logOut())}
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(Home);