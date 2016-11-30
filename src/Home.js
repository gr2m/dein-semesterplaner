import React from 'react';
import ModulePlan from './ModulePlan';
import PlanningSection from './PlanningSection';
import moduleplan from './moduleplan.json';
import users from './users.json';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {semesters: []}
  }

  componentDidMount() {
    this.loadSemestersForUser();
  }

  render() {
    var semesters = this.state.semesters;
    return (
      <div>
        <ModulePlan semesters={semesters} onSelectModule={this.selectModule.bind(this)}/>
        <PlanningSection />
      </div>
    );
  }

   loadSemestersForUser() {
    var userModules = users.students[0].tracked_modules;
    var modules = moduleplan.degree_course.modules;
    var semesters = [1,2,3,4,5,6].map(function(semester) {
      var filteredModules = modules.filter(function(module) {
        return module.recommended_semester === semester;
      });
      return filteredModules.map(function(module) {
        var userModule = userModules.find(function(userModule) {
          return userModule.module_id === module.id;
        });
        return {
           module: module,
           userModule: userModule
        }
      });
    });
    this.setState({semesters: semesters});
  }

    selectModule(module_id) {
      console.log(module_id);
      this.setState({ status: "selected"});
    }
}

export default Home
