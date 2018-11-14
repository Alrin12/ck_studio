import React from 'react';

import Card from '../Card';
import ProfileHeader from './ProfileHeader';
import ProfileAvatar from './ProfileAvatar';
import ProfileBody from './ProfileBody';
import ProfileStats from './ProfileStats';

import './ProfileCard.scss';

export default class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      href,
      header,
      avatar,
      name,
      positionName,
      stats,
      cardClass
    } = this.props;

    return (
      <div>
        <a className='card-link' href={href}>
          <Card
            className={cardClass}
          >
            <ProfileHeader
              src={header}
            />
            <ProfileAvatar
              src={avatar}
            />
            <ProfileBody
              name={name}
              positionName={positionName}
            >
              {this.props.children}
            </ProfileBody>

            {
              stats ?
                <ProfileStats
                  stats={stats}
                />
                : null
            }

          </Card>
        </a>
      </div>
    );
  }
}