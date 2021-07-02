import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/Card-List/Card-List';
import {SearchFeild} from './components/Search-Feild/Search-Feild';

class App extends Component{

constructor(){
  super();
  this.state={
    monsters:[],
    searchFeild:''
  }
  
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json()) .then(arr=>this.setState({monsters:arr}))
};



render(){

  const {monsters,searchFeild}=this.state;

  const newMonsters= monsters.filter((monster)=>monster.name.toLowerCase().includes(searchFeild.toLowerCase()))
  
  const property={
    type:"search",
    placeholder:"Search Monster"
  }
  
   
  return   <div className="App">
  <h1 style={{fontStyle:'Monster Kit'}}>MONSTERS ROLEDEX</h1>
  <SearchFeild type={property} updateState={(value)=>this.setState({searchFeild:value})}/>
  <CardList name={newMonsters}/>
  </div>
}
}

export default App;
