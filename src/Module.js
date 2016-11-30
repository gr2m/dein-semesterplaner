import React from 'react';

class Module extends React.Component {
  render() {
    var ModuleClasses = "button hover";

    switch (this.props.userModule.status) {
      case "urgent":
        ModuleClasses += " red";
        break;
      case "started":
        ModuleClasses += " yellow";
        break;
      case "selected":
        ModuleClasses += " green";
        break;
      case "completed":
        ModuleClasses += " grey";
        break;
      default:
        ModuleClasses += " blue";
    }

    return (
      <div key={this.props.module.title} className="semester">
          <p className={ModuleClasses} onClick={this.onModuleClick.bind(this)}>{this.props.module.title} {this.props.userModule.status}</p>
      </div>
    )
  }

  onModuleClick() {
    this.props.onSelectModule(this.props.userModule.module_id);
  }

}

export default Module
