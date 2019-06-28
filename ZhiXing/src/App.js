import React,{Component} from 'react';
import {GlobalStyle} from './style.js';
import Header from './common/Header';
import { GlobalStyle2 } from './static/iconfont/iconfont';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './content/home';
import Lobby from './Lobby';
import {Provider} from 'react-redux';
import store from'./store/index';
import Log from './common/User';
class App extends Component {
  render(){
    return (
      <Provider store={store}> 
      <GlobalStyle/>
      <GlobalStyle2/>
       <BrowserRouter>
      <Header></Header>  
      <Route path='/' exact component={Home}></Route>
      <Route path='/lobby' exact component={Lobby}></Route>
      <Route path='/log' exact component={Log}></Route>

</BrowserRouter>
      </Provider>
     );
  }
 
}

export default App;
