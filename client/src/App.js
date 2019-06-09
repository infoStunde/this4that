import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
	
	
	constructor(props) {
		super(props);
		this.state = { apiResponse: "init" };
	}

	callAPI() {
		if(this && this.state && this.state.apiResponse === ''){
		fetch("http://localhost:9000/test")
			.then(res => res.text())
			.then(res => this.setState({ apiResponse: res }))
			.catch(err=>err);
		} else{
			this.setState({ apiResponse: '' })
		}
	}

	componentWillMount() {
		
	}
	
	render(){
	  return (
		<div className="App">
		  <header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p onClick={()=>this.callAPI()}>
			  Edit <code>src/App.js</code> and save to reload.
			  
			  {this.state.apiResponse}
			</p>
			<a
			  className="App-link"
			  href="https://reactjs.org"
			  target="_blank"
			  rel="noopener noreferrer"
			>
			  Learn React
			</a>
		  </header>
		</div>
	  );
	}
}

export default App;
