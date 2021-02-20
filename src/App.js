import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import routes  from "./routes";
import { GlobalProvider } from './context/Provider';
import 'semantic-ui-css/semantic.min.css';
import isAuthenticatedRoute from './utils/isAuthenticatedRoute';
import { useState } from 'react';
import userLeaveConfirmation from './components/userLeaveConfirmation';

const Routes = (route) => {
  const location = useHistory();
  document.title = route.title || 'Easy contacts';
  if(route.isAuthenticatedRoute && !isAuthenticatedRoute()) {
    location.push('/auth/login');
  }
  return (
    <Route
    path = {route.path}
    exact
    render = {(props) => <route.component {...props} />}
    ></Route>
  )
}

function App() {
  const [confirmOpen, setConfirmOpen] = useState(true);
  return (
    <GlobalProvider>
      <Router
        getUserConfirmation={(message, callback) => {
          return userLeaveConfirmation(message, callback, confirmOpen, setConfirmOpen);
          
        }}>
        <Switch>
          {routes.map((route, index) => <Routes {...route} key={index}/>)}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
