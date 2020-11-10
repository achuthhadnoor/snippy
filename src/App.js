import Layout from './layouts'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import ActiveTodos from './components/active-todos';
import Home from './pages/home';

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/active" component={ActiveTodos} />
                </Switch> 
            </Layout>
        </Router>
    );
}

export default App;
