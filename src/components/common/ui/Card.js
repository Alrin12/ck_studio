import React from 'react';
import classnames from 'classnames';

import './Card.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      className
    } = this.props;
    return (
      <div className={classnames("card", className)}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;