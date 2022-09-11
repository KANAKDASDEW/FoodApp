
import './App.css';
import { Switch, Route, Link,  BrowserRouter as Router,
} from "react-router-dom";

import Header from "./Header/index.jsx";
import Home from "./Home/index.jsx";
import Services from './service';
import Service1 from './service1';

import MainFood from './MainFoodPart';

import Footer from './Footer';
import AllFoods from './AllFood';
import Contract from './Contract/Contract';
import ShopLogin from './shop/components/login.component';





function App() {
  return (
    <>

<Router>     
     <Switch>
     <Route exact path="/">
           <Header/>
           <Home/>
         < Services/>
         <Service1/>
         <MainFood/>
          <Footer/>
         
      
          </Route>
          <Route exact path="/home">
           <Header/>
           <Home/>
         < Services/>
         <Service1/>
         <MainFood/>
          <Footer/>
      
          </Route>
          <Route exact path="/Food">
           <Header/>
           <AllFoods/>
           <Footer/>
          </Route>
          <Route exact path="/contact">
           <Header/>
           <Contract/>
           <Footer/>
          
          
         
      
          </Route>
          <Route exact path="/work">
           
           <ShopLogin/>
          
         
      
          </Route>
            </Switch>
   
    </Router>



    

  
    </>
  );
}

export default App;



