import React,{Component} from 'react';  
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor()
  {
   super();
   this.state={
       monosters:[],
       searchField:''
   }
   
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monosters:users}))

  }
  render(){
    const {monosters,searchField} = this.state;
    const filteredmonosters = monosters.filter(monoster=>monoster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>Rolodex Monosters</h1>
        <SearchBox
          placeholder="search monosters" 
          handleChange={e=>this.setState({searchField:e.target.value})}/>
        <CardList monosters={filteredmonosters}/>
        </div>
      )
  }
 
}

export default App;
