import './App.css';
import Users from "./newComponents/users/Users";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Posts from "./newComponents/posts/Posts";
function App() {
  return (
    <div >
     {/* <Users/>*/}

        <Router>
            <Link to ={'/users'}> to users </Link>
            <Link to ={'/posts'}> to posts </Link>
            <Switch>
                <Route path={'/users'} render={()=>(<Users/>)}>

                </Route>
                <Route path={'/posts'} render={()=>(<Posts/>)}>

                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
