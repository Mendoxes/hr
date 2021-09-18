
import './App.css';
import Calendar from "./Calendar"
import Card from "./Card"
import {useState} from "react"
import Employers from './Employers';
import SignUp from "./SignUp.js"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import LogIn from "./LogIn"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "./Dashboard"
import ForgotPassword from './ForgotPassword';
// import Add from "./Add"
// import { useGetData } from './useGetData';


import {AuthProvider} from "../src/contexts/AuthContext"
function App() {

  const [count, setCount] = useState();
  const [startend, setStartEnd]=useState();
  // const [houers, setHouers] = useState();

  // function ok(){

  //   setHouers()
  // }
  // if(startend){
  // console.log(startend[0].startDate)}

  return (
    <div className="App">
      <AuthProvider>
    <Router>

      <Switch>
        <PrivateRoute exact path="/" component={Dashboard}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={LogIn}/>
        <Route path="/forgot-password" component={ForgotPassword}></Route>
      </Switch>
    </Router>
      <Calendar setCount={setCount} setStartEnd={setStartEnd}></Calendar>
<Card></Card>
    <Employers count={count} startend={startend}></Employers>
    </AuthProvider>

<p>count: {count}</p>

{/* <Add></Add> */}

    </div>
  );
}

export default App;
