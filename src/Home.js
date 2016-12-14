import React from 'react';
import Header from './Header';
import ModulePlan from './ModulePlan';
import PlanningSection from './PlanningSection';
import CourseSchedule from './CourseSchedule';
import moduleplan from './moduleplan.json';
import users from './users.json';

class Home extends React.Component {

  performLogin(email, password) {
    hoodie.account.signIn({ username: email, password: password})
    .then(function (sessionProperties) {
      window.location.reload();
    })
    .catch(function (error) {
      hoodie.account.destroy();
      hoodie.account.signUp({username: email, password: password});
      console.log('🐳', error)
    })
  };

  performLogout() {
    hoodie.account.signOut()
    .then(function (sessionProperties) {
      window.location.reload();
    }).catch(function (error) {
      hoodie.account.destroy();
      console.log('🐞', error)
    })
  };

  getSemestersForUser() {
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
    return semesters;
  };

  calculateTotalCredits() {
    var userModules = users.students[0].tracked_modules;
    var modules = moduleplan.degree_course.modules;
    var totalCredits= 0;
    for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].status === "completed"){
        totalCredits= totalCredits + modules[i].cp;
      }
    }
    return totalCredits;
  };


  calculateCurrentCredits() {
    var userModules = users.students[0].tracked_modules;
    var modules = moduleplan.degree_course.modules;
    var currentCredits= 0;
    for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].status === "selected"){
        currentCredits= currentCredits + modules[i].cp;
      }
    }
    return currentCredits;
  };
    
   countSelectedCourses() {
    var userModules = users.students[0].tracked_modules;
    var modules = moduleplan.degree_course.modules;
    var selectedCoursesCounter= 0;
    for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].status === "selected"){
        selectedCoursesCounter ++;
      }
    }
    return selectedCoursesCounter;
  };
  
  render() {
    var totalCreditPoints = this.calculateTotalCredits();
    var currentCreditPoints = this.calculateCurrentCredits();
    var selectedCoursesCounter = this.countSelectedCourses();
    var semesters = this.getSemestersForUser();
    return (
      <div>
      <Header performLogin={this.performLogin.bind(this)} performLogout={this.performLogout.bind(this)}/>
      <ModulePlan semesters={semesters}/>
      <PlanningSection totalCreditPoints={totalCreditPoints} currentCreditPoints={currentCreditPoints} selectedCoursesCounter={selectedCoursesCounter} />
      <CourseSchedule/>
      </div>
    );
  }
}

export default Home
