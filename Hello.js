import React, { Component } from ' react ';
import Ninjas from './Ninjas'
class App extends Component {
  state={
    ninjas : [
      {name : 'Pranav ', id: '1'},
      {name : 'Aadesh', id : ' 2 '}
    ]
  }
  render(){
    return (
      <div className= ' App '> 
      < h1 > My First React App </h1>
      <Ninjas ninjas={ this.state.ninjas}/>
      </div>
    )
  }

}

export default App


