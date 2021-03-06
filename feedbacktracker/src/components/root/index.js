import React from 'react';
import { Route,Switch} from 'react-router-dom';
import { Login } from "../../views/LoginView/index";
import { MainDashboard } from "../../views/Dashboard/index";
import { FeedbackForm } from "../../views/FeedbackForm/index";
import { MainFeedbackHistory } from '../../views/FeedbackHistory/index';
import { ForgotPassword } from '../../views/ForgotPassword/index';

// import { AppLayout } from "./app.layout";
import { ProtectedRoute } from "../../protected_route";
import SearchPage from '../../views/SearchPage';
export default class RootApp extends React.Component{
  constructor(props){
    super(props)
    // console.log((localStorage.getItem('loggedInUser')))
    const users= JSON.parse(localStorage.getItem('loggedInUser'));
    if(users) this.props.AuthenicateUser(users);
  }

    render(){
          return <div>
                        <Switch>
                          <Route exact path='/' render={(history)=> <Login {...this.props} history={history}/>} />
                          <ProtectedRoute exact path='/dashboard' component={MainDashboard} />
                          <ProtectedRoute exact path='/feedback_history' component={MainFeedbackHistory} />
                          <ProtectedRoute exact path='/feedback_form' component={FeedbackForm} />
                          <ProtectedRoute exact path='/search_page' component={SearchPage}/>

                          
                          
                          
                          <Route exact path='/forgot_password' render={()=> <ForgotPassword {...this.props} />} />

                        </Switch>
                    </div>
    }
  }
