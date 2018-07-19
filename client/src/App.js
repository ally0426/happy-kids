import React, {} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import beads from "./pages/beads"
import bracelets from "./pages/bracelets"
import keychains from "./pages/keychains"
import pacifierholders from "./pages/pacifierholders"
import rattlers from "./pages/rattlers"
import teethers from "./pages/teethers"
import home from "./pages/home"
import Contact from "./pages/Contact"
import Login from './components/Login';
import Register from './components/Register';
import Caro from './pages/home';


const App = () => (
  <Router> 
    <div> 
   <Nav />
   <Banner />

      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/beads" component={beads} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/bracelets" component={bracelets} />
        <Route exact path="/keychains" component={keychains} />
        <Route exact path="/pacifierholders" component={pacifierholders} />
        <Route exact path="/rattlers" component={rattlers} />
        <Route exact path="/teethers" component={teethers} />
      </Switch>
      <Footer />
      </div>
  </Router>  
);
document.getElementById('root')

export default App;

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       items: []
//     };
//   }

//   componentDidMount() {
//     axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
//     axios.get('/api/item')
//       .then(res => {
//         this.setState({ items: res.data });
//         console.log(this.state.items);
//       })
//       .catch((error) => {
//         if(error.response.status === 401) {
//           this.props.history.push("/login");
//         }
//       });
//   }

//   logout = () => {
//     localStorage.removeItem('jwtToken');
//     window.location.reload();
//   }

//   render() {
//     return (
//       <div class="container">
//         <div class="panel panel-default">
//           <div class="panel-heading">
//             <h3 class="panel-title">
//               ITEM CATALOG &nbsp;
//               {localStorage.getItem('jwtToken') &&
//                 <button class="btn btn-primary" onClick={this.logout}>Logout</button>
//               }
//             </h3>
//           </div>
//           <div class="panel-body">
//             <table class="table table-stripe">
//               <thead>
//                 <tr>
//                   <th>name</th>
//                   <th>price</th>
//                   <th>description</th>
//                   <th>date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.state.items.map(item =>
//                   <tr>
//                     <td><Link to={`/show/${item._id}`}>{item.name}</Link></td>
//                     <td>{item.price}</td>
//                     <td>{item.description}</td>
//                     <td>{item.date}</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;


