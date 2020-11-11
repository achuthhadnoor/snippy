import React from 'react'
import { connect } from 'react-redux' 

import { taskAdd } from '../store/actions/taskActions'
import {SignOut} from '../store/actions/authActions'

class Home extends React.Component {
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
        this.props.addTask(this.state.task)
    }

    render() {
        let {tasks} = this.props
        return (
            <div>
                <button onClick={()=>{this.props.logout();}}>logout</button>
                <form onSubmit={this.onsubmit}>
                    <input type="text" tab-index="0" onChange={this.handleChange} name="task" />
                </form>
                {
                    tasks && tasks.map(t=><div key={t.id}>{t.task}</div>)
                }                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return ({
    tasks: state.tasks
})}
const mapDispatchtoProps = dispatch => {
    return {
        addTask: task => dispatch(taskAdd({ task })),
        logout : ()=>dispatch(SignOut())
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Home);