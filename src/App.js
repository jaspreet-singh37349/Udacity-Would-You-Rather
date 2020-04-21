import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LeaderBoard from './components/LeaderBoard'
import Votes from './components/Votes'
import Error from './components/Error'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home'
import NewQuestion from './components/NewQuestion'
import { handleInitialData } from './actions/shared';
import Loading from './components/Loading';

class App extends Component {
  componentDidMount() {
    const { dispatch, loading } = this.props
    if(loading === true) {
      dispatch(handleInitialData())
   }
  }
  render() {
    if(this.props.loading){
      return(
        <Loading />
      )
    }
    return (
    <Router>
        {this.props.authedUser? <Navbar/>:null}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/add' component={NewQuestion} />
          <Route exact path='/questions/:question_id' component={Votes} />
          <Route exact path='/leaderboard' component={LeaderBoard} />
          <Route path="*" component={Error}/>
        </Switch>
    </Router>
    )
  }
}

function mapStateToProps({users,authedUser}) {

  return {
    loading: Object.keys(users).length!==0?false:true,
    authedUser
  }
}

export default connect(mapStateToProps)(App)
