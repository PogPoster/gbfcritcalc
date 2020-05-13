import React from 'react';
import './App.css';
import WeaponSkill from './Component/WeaponSkill';
import Summons from './Component/Summons';

class App extends React.Component {

  state = {
    weaponSkill: [
      {skillName: "Big 2 SK 15",
      count: 0,
      value: 12},
      {skillName: "Big SK 20",
      count: 0,
      value: 11},
      {skillName: "Sml SK 20",
      count: 0,
      value: 7.5},	  
      {skillName: "Big SK 15",
      count: 0,
      value: 10},
      {skillName: "Big SK 10",
      count: 0,
      value: 8},
      {skillName: "Med SK 15",
      count: 0,
      value: 6.5},  
      {skillName: "Med SK 10",
      count: 0,
      value: 5},   
      {skillName: "Sml SK 15",
      count: 0,
      value: 3},   
      {skillName: "Sml SK 10",
      count: 0,
      value: 2},  
    ],
    selectedOption: 0
  }
  



  plusClick = (e) => {
    var weaponSkills = this.state.weaponSkill.slice()
    weaponSkills[e].count = weaponSkills[e].count + 1
    console.log(weaponSkills[e])
    this.setState({weaponSkill: weaponSkills})
  }

  minusClick = (e) => {
    var weaponSkills = this.state.weaponSkill.slice()
    weaponSkills[e].count = Math.max(weaponSkills[e].count - 1, 0)
    console.log(weaponSkills[e])
    this.setState({weaponSkill: weaponSkills})
  }

  handleOnChange = (e) => {
      this.setState({ selectedOption: e.target.value});
  }

  render() {
    var weaponSkills = [];
    for (let i = 0; i < this.state.weaponSkill.length; i++) {
      weaponSkills.push(<WeaponSkill name={this.state.weaponSkill[i].skillName} count={this.state.weaponSkill[i].count} key={i} index={i} click={this.plusClick} minusClick={this.minusClick}></WeaponSkill>)
    }

    
    var baseCrit = 0;
    for (let i = 0; i < this.state.weaponSkill.length; i++) {
      baseCrit += this.state.weaponSkill[i].count * this.state.weaponSkill[i].value;
    }
    

    var critChance = (this.state.selectedOption) ? this.state.selectedOption * baseCrit : 0;
  

    return (
      <div className="App">
        <h2>GBF Crit Calculator Test</h2>
        {weaponSkills}
        <Summons click={this.handleOnChange} selected={this.state.selectedOption} ></Summons>
        <br/>
        Crit chance : {critChance}
        <br/>
        <br/>

        Fuck Tootniggers
      </div>
      
    );
  }

}

export default App;
