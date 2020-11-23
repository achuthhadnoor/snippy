import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { taskAdd, getTasks } from '../store/actions/taskActions' 
import { logOut } from '../store/actions/userActions'

import Logo from '../components/Logo'
import TaskSidebar from '../components/sidebar'
import { Switch, Route, Link } from 'react-router-dom'

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
            <>
                <SidebarWrapper>
                    <Logo ontitle />
                    <TaskSidebar />
                    <Link to="/today">today man</Link>
                </SidebarWrapper> 
                <Switch>
                    <Route exact path="/today" component={()=><div>today</div>}/>
                </Switch>
            </>
        )
    }
}

const SidebarWrapper = styled.div`
    max-width:300px;
    height:100%;
    width:100%;
    padding:10px;
    display:flex;
    flex-direction:column;
    overflow:auto;
    @media only screen and (max-width: 500px) {
        &{
            display:none;
        }   
    }
`


const mapStateToProps = state => {
    return ({
        // isOnline:state.offline.online,
        tasks: state.tasks.tasks,
        errors: state.tasks.errors
    })
}
const mapDispatchtoProps = dispatch => {
    return {
        addTask: task => dispatch(taskAdd({ task })),
        getTasks: () => { dispatch(getTasks()) },
        logOut: () => { dispatch(logOut()) }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Home);