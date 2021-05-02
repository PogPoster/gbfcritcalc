import React from 'react';
import './App.css';
import WeaponSkill from './Component/WeaponSkill';
import Summons from './Component/Summons';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.customRef = React.createRef();
    this.magnaRef = React.createRef();
    this.primalRef = React.createRef();
    this.sixDragonsRef = React.createRef();

  }
  state = {
    weaponSkillPrimal: [
      {skillName: "Big 2 SK 15",
      count: 0,
      pValue: 12,
      mValue: 0,
      other: 0},
      {skillName: "Big SK 20",
      count: 0,
      pValue: 11,
      mValue: 0,
      other: 0},
      {skillName: "Med SK 20",
      count: 0,
      pValue: 7.5,
      mValue: 0,
      other: 0},
      {skillName: "Sml SK 20 ",
      count: 0,
      pValue: 4,
      mValue: 0,
      other: 0},	  
      {skillName: "Big SK 15",
      count: 0,
      pValue: 10,
      mValue: 0,
      other: 0},
      {skillName: "Big SK 10",
      count: 0,
      pValue: 8,
      mValue: 0,
      other: 0},
      {skillName: "Med SK 15",
      count: 0,
      pValue: 6.5,
      mValue: 0,
      other: 0},
      {skillName: "Med SK 10",
      count: 0,
      pValue: 5,
      mValue: 0,
      other: 0}, 
      {skillName: "Sml SK 15",
      count: 0,
      pValue: 3,
      mValue: 0,
      other: 0},  
      {skillName: "Sml SK 10",
      count: 0,
      pValue: 2,
      mValue: 0,
      other: 0},
    ],
    weaponSkillMagna: [
      {skillName: "Big 2 SK 15",
      count: 0,
      mValue: 12,
      pValue: 0,
      other: 0},
      {skillName: "Big SK 20",
      count: 0,
      mValue: 11,
      pValue: 0,
      other: 0},
      {skillName: "Med SK 20",
      count: 0,
      mValue: 7.5,
      pValue: 0,
      other: 0},
      {skillName: "Sml SK 20 ",
      count: 0,
      mValue: 4,
      pValue: 0,
      other: 0},	  
      {skillName: "Big SK 15",
      count: 0,
      mValue: 10,
      pValue: 0,
      other: 0},
      {skillName: "Big SK 10",
      count: 0,
      mValue: 8,
      pValue: 0,
      other: 0},
      {skillName: "Med SK 15",
      count: 0,
      mValue: 6.5,
      pValue: 0,
      other: 0},
      {skillName: "Med SK 10",
      count: 0,
      mValue: 5,
      pValue: 0,
      other: 0}, 
      {skillName: "Sml SK 15",
      count: 0,
      mValue: 3,
      pValue: 0,
      other: 0},  
      {skillName: "Sml SK 10",
      count: 0,
      mValue: 2,
      pValue: 0,
      other: 0},
    ],
    weaponSkillOther: [
      {skillName: "Wamdus's Cnidocyte Crit",
      count: 0,
      mValue: 0,
      pValue: 0,
      other: 20},
      {skillName: "Sephira Tek (Arcarum Only)",
      count: 0,
      mValue: 0,
      pValue: 0,
      other: 30}

    ],

    dataPrimal: [
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
    dataMagna: [
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
    summonsPrimal: [
      {
       name: "2 ULB Primals",
       pValue: 4,
       mValue: 1,
       other: 1   
      },
      {name: " 1 Primal ULB/1 Primal FLB",
      pValue: 3.9,
      mValue: 1,
      other: 1   
      },
      {name: " 2 Primals FLB",
      pValue: 3.8,
      mValue: 1,
      other: 1   
      },
      {name: " 1 Primals ULB",
      pValue: 2.5,
      mValue: 1,
      other: 1   
      },
      {name: " 1 Primals FLB",
      pValue: 2.4,
      mValue: 1,
      other: 1   
      }
    ],
    summonsMagna: [
      {
       name: "2 ULB Magna",
       pValue: 1,
       mValue: 3.8,
       other: 1   
      },
      {name: " 1 ULB Magna",
      pValue: 1,
      mValue: 2.4,
      other: 1   
      }
    ],
    summonsOther: [
      {
       name: "No Boosts",
       pValue: 1,
       mValue: 1,
       other: 1   
      }
    ],

    primalValue: 1,
    magnaValue: 1,
    primalSubValue: 0
  }
  

  //TODO
  //REWRITE THIS INTO GENERIC, TOO LAZY
  //OR JUST CHANGE IT TO INPUT NUMBER
  //Remove redundancy 

  plusClickPrimal = (e) => {
    var weaponSkills = this.state.weaponSkillPrimal.slice()
    weaponSkills[e].count = weaponSkills[e].count + 1
    this.setState({weaponSkillPrimal: weaponSkills})
  }

  minusClickPrimal = (e) => {
    var weaponSkills = this.state.weaponSkillPrimal.slice()
    weaponSkills[e].count = Math.max(weaponSkills[e].count - 1, 0)
    this.setState({weaponSkillPrimal: weaponSkills})
  }

  plusClickMagna = (e) => {
    var weaponSkills = this.state.weaponSkillMagna.slice()
    weaponSkills[e].count = weaponSkills[e].count + 1
    this.setState({weaponSkillMagna: weaponSkills})
  }

  minusClickMagna = (e) => {
    var weaponSkills = this.state.weaponSkillMagna.slice()
    weaponSkills[e].count = Math.max(weaponSkills[e].count - 1, 0)
    this.setState({weaponSkillMagna: weaponSkills})
  }

  plusClickOther = (e) => {
    var weaponSkills = this.state.weaponSkillOther.slice()
    weaponSkills[e].count = weaponSkills[e].count + 1
    this.setState({weaponSkillOther: weaponSkills})
  }

  minusClickOther = (e) => {
    var weaponSkills = this.state.weaponSkillOther.slice()
    weaponSkills[e].count = Math.max(weaponSkills[e].count - 1, 0)
    this.setState({weaponSkillOther: weaponSkills})
  }



  boostedplusClick = (e) => {
    var weaponSkills = this.state.dataPrimal.slice()
    weaponSkills[e].count = weaponSkills[e].count + 1
    this.setState({dataBoosted: weaponSkills})
  }

  boostedminusClick = (e) => {
    var weaponSkills = this.state.dataPrimal.slice()
    weaponSkills[e].count = Math.max(weaponSkills[e].count - 1, 0)
    this.setState({dataBoosted: weaponSkills})
  }

  unboostedplusClick = (e) => {
    var weaponSkills = this.state.dataMagna.slice()
    weaponSkills[e].count = weaponSkills[e].count + 1
    this.setState({dataMagna: weaponSkills})
  }

  unboostedminusClick = (e) => {
    var weaponSkills = this.state.dataMagna.slice()
    weaponSkills[e].count = Math.max(weaponSkills[e].count - 1, 0)
    this.setState({dataMagna: weaponSkills})
  }

  handleOnChange = (e) => {
      console.log(JSON.stringify(e.target.value.primal))
      this.setState({ selectedOption: e.target.value.primal});
  }
		//Theoretical damage increase: {(Math.min(critChance, 100) * 0.5)}%

  render() {
    const weaponSkillsPrimal = this.state.weaponSkillPrimal.map((weapon, index)=> 
      <WeaponSkill name={weapon.skillName} count={weapon.count} key={"WeaponSkills" + index} index={index} click={this.plusClickPrimal} minusClick={this.minusClickPrimal}></WeaponSkill>
    )

    const weaponSkillsMagna = this.state.weaponSkillMagna.map((weapon, index)=> 
      <WeaponSkill name={weapon.skillName} count={weapon.count} key={"WeaponSkills" + index} index={index} click={this.plusClickMagna} minusClick={this.minusClickMagna}></WeaponSkill>
    )

    const weaponSkillsOther = this.state.weaponSkillOther.map((weapon, index)=> 
      <WeaponSkill name={weapon.skillName} count={weapon.count} key={"WeaponSkills" + index} index={index} click={this.plusClickOther} minusClick={this.minusClickOther}></WeaponSkill>
    )

    const summonsPrimal = this.state.summonsPrimal.map((summon, index) => 
      <> <input type="radio" name="summons" onChange={()=> this.setState({primalValue: summon.pValue, magnaValue: summon.mValue})}/> {summon.name} <br/></>

    )

    const summonsMagna = this.state.summonsMagna.map((summon, index) => 
      <> <input type="radio" name="summons" onChange={()=> this.setState({primalValue: summon.pValue, magnaValue: summon.mValue})}/> {summon.name} <br/></>
    )

    const summonsOther = this.state.summonsOther.map((summon, index) => 
      <> <input type="radio" name="summons" onChange={()=> this.setState({primalValue: summon.pValue, magnaValue: summon.mValue})}/> {summon.name} <br/></>
    )


    const primalData = this.state.dataPrimal.map((weapon, index)=> 
      <WeaponSkill name={weapon.skillName} count={weapon.count} key={"dataBoosted"+index} index={index} click={this.boostedplusClick} minusClick={this.boostedminusClick}></WeaponSkill>
    )

    const magnaData = this.state.dataMagna.map((weapon, index)=> 
      <WeaponSkill name={weapon.skillName} count={weapon.count} key={"dataUnboosted"+index} index={index} click={this.unboostedplusClick} minusClick={this.unboostedminusClick}></WeaponSkill>
    )


    const basePrimalCrit = this.state.weaponSkillPrimal.reduce((accumulator, weapon)=> parseFloat(accumulator) + (weapon.count * weapon.pValue), 0)
    const primalCritChance = (this.state.primalValue) ? (this.state.primalValue + this.state.primalSubValue )* basePrimalCrit : 0;
  
    const baseMagnaCrit = this.state.weaponSkillMagna.reduce((accumulator, weapon)=> parseFloat(accumulator) + (weapon.count * weapon.mValue), 0)
    const magnaCritChance = (this.state.magnaValue) ? this.state.magnaValue * baseMagnaCrit : 0;

    const baseOtherCrit = this.state.weaponSkillOther.reduce((accumulator, weapon)=> parseFloat(accumulator) + (weapon.count * weapon.other), 0)


    const primalDa = Math.min(this.state.dataPrimal.reduce((accumulator, weapon)=> parseFloat(accumulator) + (weapon.count * weapon.da), 0) * (this.state.primalValue + this.state.primalSubValue), 50)
    const primalTa = Math.min(this.state.dataPrimal.reduce((accumulator, weapon)=> parseFloat(accumulator) + (weapon.count * weapon.ta), 0) * (this.state.primalValue + this.state.primalSubValue), 50)

    const magnaDa = Math.min(this.state.dataMagna.reduce((accumulator, weapon)=> parseFloat(accumulator) + (weapon.count * weapon.da), 0) * (this.state.magnaValue) , 50)
    const magnaTa = Math.min(this.state.dataMagna.reduce((accumulator, weapon)=> parseFloat(accumulator) + (weapon.count * weapon.ta), 0) * (this.state.magnaValue), 50)

    return (
      <div className="App" style={{marginLeft:"12px"}}>
        <h2>GBF Crit Calculator </h2>
        <div class="container">
          <div class="row">
            <div class="col-sm">
            <h3>Primal Crit </h3>
              <table>
                {weaponSkillsPrimal}
              </table>
            </div>
            <div class="col-sm">
            <h3>Magna Crit </h3>
              <table>
                {weaponSkillsMagna}
              </table>
            </div>
            <div class="col-sm">
            <h3>Unboosted Crit </h3>
              <table>
                {weaponSkillsOther}
              </table>
              <br/>
           </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm">
                {summonsPrimal}
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="customSwitch1" ref={this.sixDragonsRef}  onChange={()=> {
                    this.sixDragonsRef.current.checked ? this.setState({primalSubValue: 0.2}) : this.setState({primalSubValue: 0})
                  }}/>
                  <label class="custom-control-label" for="customSwitch1"> 6 Dragons MLB subaura</label>
                </div>

            </div>
            <div class="col-sm">
                {summonsMagna}
            </div>
            <div class="col-sm">
                {summonsOther}
                <> <input  ref={this.customRef} type="radio" name="summons" onChange={()=> this.setState({primalValue: this.primalRef.current.value/100 + 1, magnaValue: this.magnaRef.current.value/100 + 1})}/> Custom Multipliers
                <br/> Primal <input ref={this.primalRef} placeholder={"150"} style={{width: "100px"}}  onChange={()=>this.customRef?.current?.checked && this.setState({primalValue: this.primalRef.current.value/100 + 1, magnaValue: this.magnaRef.current.value/100 + 1})}></input> 
                <br/> Magna <input ref={this.magnaRef} placeholder={"140"} style={{width: "100px"}} onChange={()=>this.customRef?.current?.checked && this.setState({primalValue: this.primalRef.current.value/100 + 1, magnaValue: this.magnaRef.current.value/100 + 1})}></input> 
                
                </> 
           </div>
          </div>
        </div>



        <br/>

        Current Summon Multipliers: Primal: {(this.state.primalValue*100 + this.state.primalSubValue*100).toFixed(2)}% / Magna: {(this.state.magnaValue*100).toFixed(2)}% 
        <br/>
        <br/>

        Total Crit chance : {(primalCritChance + magnaCritChance + baseOtherCrit).toFixed(2)}
        <br/>
        <br/>
		    <br/>


        <div class="container">
          <div class="row">
            <div class="col-sm">
              <table>
                <h3>Primal DATA </h3>
                {primalData}

              </table>

            </div>
            <div class="col-sm">
              <table>
              <h3>Magna DATA </h3>

              { magnaData}

              </table>

            </div>
            <div class="col-sm">
           </div>
          </div>
        </div>

        {/* Main type Data (Primal data skills if you are primal etc)
        <table>
        </table>
		    <br/>
        Other type Data (this would be the opposite of your summon type, e.g primal data if you are running magna)
        <table>
        </table>
		    <br/> */}
        Total Data DA/TA <br/>
        Primal: {primalDa.toFixed(2)}/{primalTa.toFixed(2)} 
        <br/>
        Magna: {magnaDa.toFixed(2)}/{magnaTa.toFixed(2)}
		    <br/>
        Combined: {(primalDa + magnaDa).toFixed(2)}/{(primalTa + magnaTa).toFixed(2)}
		    <br/>
		    <br/>



      </div>
      
    );
  }

}

export default App;
