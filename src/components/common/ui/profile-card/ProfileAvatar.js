import React from 'react';

import './ProfileAvatar.scss';

class ProfileAvatar extends React.Component {
  render() {
    let {
      src
    } = this.props;

    return (
      <div
        className='user-card-avatar'
        style={{backgroundImage: `url(${src})`}}
      >

      </div>
    );
  }
}

export default ProfileAvatar;