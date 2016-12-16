import React from 'react';
import Weekday from './Weekday';

class CourseSchedule extends React.Component {

  getWeekdays() {
    const weeklist = [
    { id:1, name:'Montag'},
    { id:2, name:'Dienstag'},
    { id:3, name:'Mittwoch'},
    { id:4, name:'Donnerstag'},
    { id:5, name:'Freitag'},
    ];
    return weeklist.map((weekday) => {
      return(
        <Weekday  name={weekday.name} key={weekday.id} />
        );
    });
  }
  

  render() {
   
  var weekdays= this.getWeekdays();
    return (
      <div>
       <section id="schedule">
      <h5>Kalender/Weekly Planner</h5>
    <table>
      <tr>
        <th>Zeiten</th>
        <th>Montag</th>
        <th>Dienstag</th>
        <th>Mittwoch</th>
        <th>Donnerstag</th>
        <th>Freitag</th>
        <th>Samstag</th>
      </tr>
      <tr>
        <td>8.00 - 9.30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>9.45 - 11.15</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>12.15 - 13.45</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>14.00 - 15.30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>15.45 - 17.15</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    </section>
    <Weekday name={weekdays}/>

    </div>
    )
  }
}

export default CourseSchedule