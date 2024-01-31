import React from 'react';
class HeaderOne extends React.Component {
    
  render() {
    return (
      <h1 className={`text-${this.props.color} mt-5 `}>{this.props.name}</h1>
    );
  } 
}

export default HeaderOne;