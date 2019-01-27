import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModelDetails from './modelDetails';

class ModelContainer extends Component {

  render() {
    return (
      <div>
        {this.props.models.map(item => {
          return <ModelDetails 
            key={item.name} 
            name={item.name} 
            manufacturer={item.manufacturer}
            year={item.year}
            origin={item.origin}/>;
        })
        }
      </div>      
    )
  }
}

const mapStateToProps = state => {
  return {
    models: state.model
  }
}

export default connect(mapStateToProps)(ModelContainer)

 