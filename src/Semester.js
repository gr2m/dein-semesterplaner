import React from 'react';
import Module from './Module';

class Semester extends React.Component {

  render() {
    return (
      <div id="sem_01">
        <legend>{this.props.semester}. Semester</legend>
        {this.props.modules.map((e, i) =>
          (<Module module={e} key={i} />)
        )
        }
      </div>
    )
  }
}

export default Semester
