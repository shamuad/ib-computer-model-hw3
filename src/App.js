import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addModel } from './actions/models'
import ModelContainer from './components/modelContainer';

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}


class App extends Component {

  state = {
    selectedValue: ''
  }

  updateSelection = (event) => {
    let itemKey = event.target.value;
    this.setState({
      selectedValue: itemKey
    });
  }

  displaySelected = () => {
    const modelData = Object.assign({name:this.state.selectedValue}, data[this.state.selectedValue]);
    this.props.addModel(modelData);
  }

  createList = () => {
    let list = [];

    for (var key in data){
      let item = data[key];
      list.push(<option key={key} value={key}>{key} ({item.year})</option>);
    }
    return list;
  }

  render() {
    return (
      <div className="App">
        <ModelContainer />
        <select value={this.state.selectedTeam} onChange={this.updateSelection}>
          <option key="0" value="0">--Pick a model --</option>
          {this.createList()};
        </select>
        <button onClick={this.displaySelected}>Add</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    models: state
  }
}

export default connect(mapStateToProps, {addModel})(App)
