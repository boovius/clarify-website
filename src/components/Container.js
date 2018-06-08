import React, { Component } from 'react';
import { css as glamor } from 'glamor'

let containerStyles = glamor({
  width: '50%',
  paddingTop: '100px',
  margin: '0 auto',
})

class Container extends Component {
  render() {
    return (
      <div className={containerStyles} >
        {this.props.children}
      </div>
    );
  }
}

export default Container;
