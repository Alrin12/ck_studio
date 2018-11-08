import React from 'react';

import './ProfileHeader.scss';

class ProfileHeader extends React.Component {
  render() {
    let {
      src
    } = this.props;

    return (
      <div
        className='user-card-header'
        style={{backgroundImage: `url(${src})`}}
      >
      </div>
    );
  }
}

export default ProfileHeader;