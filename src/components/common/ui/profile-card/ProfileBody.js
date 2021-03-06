import React from 'react';

import './ProfileBody.scss';

class ProfileBody extends React.Component {
  render() {
    let {
      name,
      positionName
    } = this.props;

    return (
      <div
        className='user-card-body'
      >
        <div className='user-card-name'>
          {name}
        </div>
        <div className='user-card-position-name'>
          {positionName}
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default ProfileBody;