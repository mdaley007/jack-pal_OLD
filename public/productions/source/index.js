// import modules
import   React           from 'react'
import   ReactDOM        from 'react-dom'
import { BrowserHistory,
         Route,
         HashRouter as Router,
         Switch }        from 'react-router-dom'

// import styles
import './styles/main.css'

// import views
import About     from './views/About'
import Home      from './views/Home'
import Layout    from './views/Layout'
import Workshops from './views/Workshops'

// define router
const router = (
    <Router history={BrowserHistory}>
        <Route path='/'          component={Home} />
        <Route path='/About'     component={About} />
        <Route path='/Workshops' component={Workshops} />
    </Router>
)

// render router
ReactDOM.render(
    <Home />,
    document.getElementById('root')
)