import React from 'react';
import New from './new/new';
import Popular from './popular/popular';

function highlighted(Component) {
  return class extends React.Component {
    render() {
      if (this.props.views >= 1000) {
        return (
          <Popular>
            <Component {...this.props} />
          </Popular>
        );
      }
      else if (this.props.views < 100) {
        return (
          <New>
            <Component {...this.props} />
          </New>
        );
      }
      else {
        return (
          <Component {...this.props} />
        );
      }
    }
  }
}

export default highlighted;