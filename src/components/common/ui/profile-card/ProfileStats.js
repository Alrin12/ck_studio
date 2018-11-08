import React from 'react';

import './ProfileStats.scss';

class ProfileStats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      stats
    } = this.props;

    return (
      <div
        className='user-card-stats'
      >
        {
          stats.map((stat, i) => {
            return (
              <div className='stat-container'>
                <div className='stat-value'>
                  {stat.value}
                </div>
                <div className='stat-name'>
                  {stat.name}
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default ProfileStats;