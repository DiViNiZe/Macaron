import React from 'react'
import {withRoute,Switch,Route} from 'react-router-dom'
import {
    Login, 
    NotFoundPage
}
from './container'
class App extends React.Component {
   render() {
      return (
         <div>
             <Route exact path='/' component={Login}/>
             <Route component={NotFoundPage} />
         </div>
      );
   }
}

export default App;