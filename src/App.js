import React from 'react';
import {Table} from './components'
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      selectedColor: "",
      numRow: 1,
      numCol: 1,
      colored: false,
    }
  }
addRow = () =>{
    this.setState((prevState) => ({numRow: prevState.numRow+1}))
  }

  addCol = () =>{
    this.setState((prevState) => ({numCol: prevState.numCol+1}))
  }

  removeRow = () =>{
	  if (this.state.numRow > 1) {
		  this.setState((prevState) => ({ numRow: prevState.numRow - 1 }))
	  }
	  else {
		  this.setState({ numRow: 1, numCol: 1 })
	  }
  }

  removeCol = () =>{
    if(this.state.numCol > 1){
    this.setState((prevState) => ({numCol: prevState.numCol-1}))
    }
    else{
      this.setState({ numRow: 1, numCol: 1 })
    } 
  }
  selectColor = (e) =>{
    this.setState({selectedColor: e.target.value})
  }
  
  changeColor =(e) =>{
    if(this.state.selectedColor !== ""){
      e.target.style.backgroundColor = this.state.selectedColor;
      e.target.className ="colored";
    }
    console.log(e.target.className)
  }

  render(){
  return (
    <div className="App">
      
      <img src="sq.gif" class="center" width= "150px" height= "150px"/>
        <h1 className="container">DOM Challenge</h1>
    
        <div className ="container">
        <button type="button"className="myButton setMargin" onClick={()=>this.addRow()}>Add Row</button>
        <button type="button"className="myButton setMargin" onClick={()=>this.addCol()}>Add Column</button>
        <button type="button"className="myButton setMargin" onClick={()=>this.removeRow()}>Remove Row</button>
        <button type="button"className="myButton setMargin" onClick={()=>this.removeCol()}>Remove Column</button>

      

        <select className="myButton setMargin" onChange={this.selectColor}>
                <option value>Select Color</option>
                <option value="#3A81F1">Blue</option>
                <option value="#2DA94F">Green</option>
                <option value="#FDBD00">Yellow</option>
                <option value="#EA4335">Red</option>
                <option value="#5F6368">Grey</option>
                
            </select>
        </div>
        <div className="container">
          <table>
            <tbody>
            <Table 
            selectedColor = {this.state.selectedColor}
            numRow = {this.state.numRow}
            numCol = {this.state.numCol}
            changeColor = {this.changeColor}
            colored ={this.state.colored}
            cell = {this.state.cells}
            />

            </tbody>

          </table>
        </div>
    </div>
  );
  }
}

export default App;
