import React from 'react';
import Checkout from './components/Checkout'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[
        {id:1,nombre:'Polo A',foto:'./img/foto_1.jpeg',precio:10.00},
        {id:2,nombre:'Polo B',foto:'./img/foto_2.jpeg',precio:20.00},
        {id:3,nombre:'Polo C',foto:'./img/foto_3.jpeg',precio:40.00}
      ]
    }
  }

  render(){
    return( <div>     
      <Checkout items={this.state.items} />
    </div> );
  }
}
export default App;
