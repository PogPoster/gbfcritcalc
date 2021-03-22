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
      {skillName: "Med SK 20",
      count: 0,
      value: 7.5},
      {skillName: "Sml SK 20 ",
      count: 0,
      value: 4},	  
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
    dataBoosted: [
      {skillName: "Big 2 SK 15",
      count: 0,
      da: 9,
      ta: 9},
      {skillName: "Big 2 SK 10",
      count: 0,
      da: 7,
      ta: 7},
      {skillName: "Big SK 15",
      count: 0,
      da: 7,
      ta: 7},
      {skillName: "Big SK 10",
      count: 0,
      da: 5,
      ta: 5},
      {skillName: "Med SK 20",
      count: 0,
      da: 6,
      ta: 6},
      {skillName: "Med SK 15",
      count: 0,
      da: 5,
      ta: 5},
      {skillName: "Med SK 10",
      count: 0,
      da: 3.5,
      ta: 3.5},
      {skillName: "Sml SK 15",
      count: 0,
      da: 3.5,
      ta: 3.5},
      {skillName: "Sml SK 10",
      count: 0,
      da: 2.2,
      ta: 2.2},
      {skillName: "Sml Fandango SK 15",
      count: 0,
      da: 0,
      ta: 2},
      {skillName: "Sml Devastation SK 15",
      count: 0,
      da: 0,
      ta: 2.5},
      {skillName: "Big SK 15 DA Only (Restraint)",
      count: 0,
      da: 7,
      ta: 0},
      {skillName: "Med SK 15 DA Only (Restraint)",
      count: 0,
      da: 5,
      ta: 0},
      {skillName: "Sml SK 15 DA Only (Restraint)",
      count: 0,
      da: 3.5,
      ta: 0},
    ],
    dataUnboosted: [
      {skillName: "Big 2 SK 15",
      count: 0,
      da: 9,
      ta: 9},
      {skillName: "Big 2 SK 10",
      count: 0,
      da: 7,
      ta: 7},
      {skillName: "Big SK 15",
      count: 0,
      da: 7,
      ta: 7},
      {skillName: "Big SK 10",
      count: 0,
      da: 5,
      ta: 5},
      {skillName: "Med SK 20",
      count: 0,
      da: 6,
      ta: 6},
      {skillName: "Med SK 15",
      count: 0,
      da: 5,
      ta: 5},
      {skillName: "Med SK 10",
      count: 0,
      da: 3.5,
      ta: 3.5},
      {skillName: "Sml SK 15",
      count: 0,
      da: 3.5,
      ta: 3.5},
      {skillName: "Sml SK 10",
      count: 0,
      da: 2.2,
      ta: 2.2},
      {skillName: "Sml Fandango SK 15",
      count: 0,
      da: 0,
      ta: 2},
      {skillName: "Sml Devastation SK 15",
      count: 0,
      da: 0,
      ta: 2.5},
      {skillName: "Big SK 15 DA Only (Restraint)",
      count: 0,
      da: 7,
      ta: 0},
      {skillName: "Med SK 15 DA Only (Restraint)",
      count: 0,
      da: 5,
      ta: 0},
      {skillName: "Sml SK 15 DA Only (Restraint)",
      count: 0,
      da: 3.5,
      ta: 0},
    ],

    selectedOption: 0
  }
  

  //TODO
  //REWRITE THIS INTO GENERIC, TOO LAZY
  //OR JUST CHANGE IT TO INPUT NUMBER

  plusClick = (e) => {
    var weaponSkills = this.state.weaponSkill.slice()
    weaponSkills[e].count = weaponSkills[e].count + 1
    this.setState({weaponSkill: weaponSkills})
  }

  minusClick = (e) => {
    var weaponSkills = this.state.weaponSkill.slice()
    weaponSkills[e].count = Math.max(weaponSkills[e].count - 1, 0)
    this.setState({weaponSkill: weaponSkills})
  }

  boostedplusClick = (e) => {
    var weaponSkills = this.state.dataBoosted.slice()
    weaponSkills[e].count = weaponSkills[e].count + 1
    this.setState({dataBoosted: weaponSkills})
  }

  boostedminusClick = (e) => {
    var weaponSkills = this.state.dataBoosted.slice()
    weaponSkills[e].count = Math.max(weaponSkills[e].count - 1, 0)
    this.setState({dataBoosted: weaponSkills})
  }

  unboostedplusClick = (e) => {
    var weaponSkills = this.state.dataUnboosted.slice()
    weaponSkills[e].count = weaponSkills[e].count + 1
    this.setState({dataUnboosted: weaponSkills})
  }

  unboostedminusClick = (e) => {
    var weaponSkills = this.state.dataUnboosted.slice()
    weaponSkills[e].count = Math.max(weaponSkills[e].count - 1, 0)
    this.setState({dataUnboosted: weaponSkills})
  }

  handleOnChange = (e) => {
      this.setState({ selectedOption: e.target.value});
  }
		//Theoretical damage increase: {(Math.min(critChance, 100) * 0.5)}%

  render() {

    const weaponSkills = this.state.weaponSkill.map((weapon, index)=> 
      <WeaponSkill name={weapon.skillName} count={weapon.count} key={"WeaponSkills" + index} index={index} click={this.plusClick} minusClick={this.minusClick}></WeaponSkill>
    )

    const dataBoosted = this.state.dataBoosted.map((weapon, index)=> 
      <WeaponSkill name={weapon.skillName} count={weapon.count} key={"dataBoosted"+index} index={index} click={this.boostedplusClick} minusClick={this.boostedminusClick}></WeaponSkill>
    )

    const dataUnboosted = this.state.dataUnboosted.map((weapon, index)=> 
      <WeaponSkill name={weapon.skillName} count={weapon.count} key={"dataUnboosted"+index} index={index} click={this.unboostedplusClick} minusClick={this.unboostedminusClick}></WeaponSkill>
    )


    const baseCrit = this.state.weaponSkill.reduce((accumulator, weapon)=> parseFloat(accumulator) + (weapon.count * weapon.value), 0)
    const critChance = (this.state.selectedOption) ? this.state.selectedOption * baseCrit : 0;
  
    const boostedDa = Math.min(this.state.dataBoosted.reduce((accumulator, weapon)=> parseFloat(accumulator) + (weapon.count * weapon.da), 0) * (this.state.selectedOption), 50)
    const boostedTa = Math.min(this.state.dataBoosted.reduce((accumulator, weapon)=> parseFloat(accumulator) + (weapon.count * weapon.ta), 0) * (this.state.selectedOption), 50)

    const unboostedDa = Math.min(this.state.dataUnboosted.reduce((accumulator, weapon)=> parseFloat(accumulator) + (weapon.count * weapon.da), 0) , 50)
    const unboostedTa = Math.min(this.state.dataUnboosted.reduce((accumulator, weapon)=> parseFloat(accumulator) + (weapon.count * weapon.ta), 0) , 50)


    return (
      <div className="App" style={{marginLeft:"12px"}}>
        <h2>GBF Crit Calculator Test</h2>
        <table>
          {weaponSkills}
        </table>
        <Summons click={this.handleOnChange} selected={this.state.selectedOption} ></Summons>
        <br/>
        Crit chance : {critChance}
        <br/>
        <br/>
		    <br/>
        Main type Data (Primal data skills if you are primal etc)
        <table>
          {dataBoosted}
        </table>
		    <br/>
        Other type Data (this would be the opposite of your summon type, e.g primal data if you are running magna)
        <table>
          {dataUnboosted}
        </table>
		    <br/>
        Total Data DA/TA <br/>
        Main Type: {boostedDa.toFixed(2)}/{boostedTa.toFixed(2)} 
        <br/>
        Off Type: {unboostedDa.toFixed(2)}/{unboostedTa.toFixed(2)}
		    <br/>
        Combined: {(boostedDa + unboostedDa).toFixed(2)}/{(boostedTa + unboostedTa).toFixed(2)}
		    <br/>
		    <br/>



      </div>
      
    );
  }

}

export default App;
