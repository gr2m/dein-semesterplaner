import React from 'react';
import Semester from './Semester';

class ModulePlan extends React.Component {
  render() {
    return (
      <div>
        Regelstudienplan
        {this.props.semesters.map((semester, index) => {
          return (
            <Semester semester={index+1} modules={semester} onSelectModule={this.props.onSelectModule}/>
          )
        })
        }
      </div>
    )
  }
}

export default ModulePlan
