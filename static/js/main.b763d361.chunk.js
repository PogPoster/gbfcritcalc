(this.webpackJsonpgbfcritcalc=this.webpackJsonpgbfcritcalc||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(6),u=t.n(i),r=(t(12),t(1)),c=t(2),m=t(4),s=t(3),o=(t(13),function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("tr",null,n.a.createElement("td",null,this.props.name," :"),n.a.createElement("td",{style:{padding:"0 15px"}},this.props.count),n.a.createElement("td",null,n.a.createElement("button",{style:{width:"36px"},type:"button",class:"btn btn-secondary",onClick:this.props.click.bind(this,this.props.index)},"+")),n.a.createElement("td",null,n.a.createElement("button",{style:{width:"36px"},type:"button",class:"btn btn-secondary",onClick:this.props.minusClick.bind(this,this.props.index)},"-")))}}]),t}(l.Component)),p=(l.Component,t(14),function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={weaponSkillPrimal:[{skillName:"Big 2 SK 15",count:0,pValue:12,mValue:0,other:0},{skillName:"Big SK 20",count:0,pValue:11,mValue:0,other:0},{skillName:"Med SK 20",count:0,pValue:7.5,mValue:0,other:0},{skillName:"Sml SK 20 ",count:0,pValue:4,mValue:0,other:0},{skillName:"Big SK 15",count:0,pValue:10,mValue:0,other:0},{skillName:"Big SK 10",count:0,pValue:8,mValue:0,other:0},{skillName:"Med SK 15",count:0,pValue:6.5,mValue:0,other:0},{skillName:"Med SK 10",count:0,pValue:5,mValue:0,other:0},{skillName:"Sml SK 15",count:0,pValue:3,mValue:0,other:0},{skillName:"Sml SK 10",count:0,pValue:2,mValue:0,other:0}],weaponSkillMagna:[{skillName:"Big 2 SK 15",count:0,mValue:12,pValue:0,other:0},{skillName:"Big SK 20",count:0,mValue:11,pValue:0,other:0},{skillName:"Med SK 20",count:0,mValue:7.5,pValue:0,other:0},{skillName:"Sml SK 20 ",count:0,mValue:4,pValue:0,other:0},{skillName:"Big SK 15",count:0,mValue:10,pValue:0,other:0},{skillName:"Big SK 10",count:0,mValue:8,pValue:0,other:0},{skillName:"Med SK 15",count:0,mValue:6.5,pValue:0,other:0},{skillName:"Med SK 10",count:0,mValue:5,pValue:0,other:0},{skillName:"Sml SK 15",count:0,mValue:3,pValue:0,other:0},{skillName:"Sml SK 10",count:0,mValue:2,pValue:0,other:0}],weaponSkillOther:[{skillName:"Wamdus's Cnidocyte Crit",count:0,mValue:0,pValue:0,other:20},{skillName:"Sephira Tek (Arcarum Only)",count:0,mValue:0,pValue:0,other:30}],dataPrimal:[{skillName:"Big 2 SK 15",count:0,da:9,ta:9},{skillName:"Big 2 SK 10",count:0,da:7,ta:7},{skillName:"Big SK 15",count:0,da:7,ta:7},{skillName:"Big SK 10",count:0,da:5,ta:5},{skillName:"Med SK 20",count:0,da:6,ta:6},{skillName:"Med SK 15",count:0,da:5,ta:5},{skillName:"Med SK 10",count:0,da:3.5,ta:3.5},{skillName:"Sml SK 15",count:0,da:3.5,ta:3.5},{skillName:"Sml SK 10",count:0,da:2.2,ta:2.2},{skillName:"Sml Fandango SK 15",count:0,da:0,ta:2},{skillName:"Sml Devastation SK 15",count:0,da:0,ta:2.5},{skillName:"Big SK 15 DA Only (Restraint)",count:0,da:7,ta:0},{skillName:"Med SK 15 DA Only (Restraint)",count:0,da:5,ta:0},{skillName:"Sml SK 15 DA Only (Restraint)",count:0,da:3.5,ta:0}],dataMagna:[{skillName:"Big 2 SK 15",count:0,da:9,ta:9},{skillName:"Big 2 SK 10",count:0,da:7,ta:7},{skillName:"Big SK 15",count:0,da:7,ta:7},{skillName:"Big SK 10",count:0,da:5,ta:5},{skillName:"Med SK 20",count:0,da:6,ta:6},{skillName:"Med SK 15",count:0,da:5,ta:5},{skillName:"Med SK 10",count:0,da:3.5,ta:3.5},{skillName:"Sml SK 15",count:0,da:3.5,ta:3.5},{skillName:"Sml SK 10",count:0,da:2.2,ta:2.2},{skillName:"Sml Fandango SK 15",count:0,da:0,ta:2},{skillName:"Sml Devastation SK 15",count:0,da:0,ta:2.5},{skillName:"Big SK 15 DA Only (Restraint)",count:0,da:7,ta:0},{skillName:"Med SK 15 DA Only (Restraint)",count:0,da:5,ta:0},{skillName:"Sml SK 15 DA Only (Restraint)",count:0,da:3.5,ta:0}],summonsPrimal:[{name:"2 ULB Primals",pValue:4,mValue:1,other:1},{name:" 1 Primal ULB/1 Primal FLB",pValue:3.9,mValue:1,other:1},{name:" 2 Primals FLB",pValue:3.8,mValue:1,other:1},{name:" 1 Primals ULB",pValue:2.5,mValue:1,other:1},{name:" 1 Primals FLB",pValue:2.4,mValue:1,other:1}],summonsMagna:[{name:"2 ULB Magna",pValue:1,mValue:3.8,other:1},{name:" 1 ULB Magna",pValue:1,mValue:2.4,other:1}],summonsOther:[{name:"No Boosts",pValue:1,mValue:1,other:1}],primalValue:1,magnaValue:1,primalSubValue:0},l.plusClickPrimal=function(e){var a=l.state.weaponSkillPrimal.slice();a[e].count=a[e].count+1,l.setState({weaponSkillPrimal:a})},l.minusClickPrimal=function(e){var a=l.state.weaponSkillPrimal.slice();a[e].count=Math.max(a[e].count-1,0),l.setState({weaponSkillPrimal:a})},l.plusClickMagna=function(e){var a=l.state.weaponSkillMagna.slice();a[e].count=a[e].count+1,l.setState({weaponSkillMagna:a})},l.minusClickMagna=function(e){var a=l.state.weaponSkillMagna.slice();a[e].count=Math.max(a[e].count-1,0),l.setState({weaponSkillMagna:a})},l.plusClickOther=function(e){var a=l.state.weaponSkillOther.slice();a[e].count=a[e].count+1,l.setState({weaponSkillOther:a})},l.minusClickOther=function(e){var a=l.state.weaponSkillOther.slice();a[e].count=Math.max(a[e].count-1,0),l.setState({weaponSkillOther:a})},l.boostedplusClick=function(e){var a=l.state.dataPrimal.slice();a[e].count=a[e].count+1,l.setState({dataBoosted:a})},l.boostedminusClick=function(e){var a=l.state.dataPrimal.slice();a[e].count=Math.max(a[e].count-1,0),l.setState({dataBoosted:a})},l.unboostedplusClick=function(e){var a=l.state.dataMagna.slice();a[e].count=a[e].count+1,l.setState({dataMagna:a})},l.unboostedminusClick=function(e){var a=l.state.dataMagna.slice();a[e].count=Math.max(a[e].count-1,0),l.setState({dataMagna:a})},l.handleOnChange=function(e){console.log(JSON.stringify(e.target.value.primal)),l.setState({selectedOption:e.target.value.primal})},l.customRef=n.a.createRef(),l.magnaRef=n.a.createRef(),l.primalRef=n.a.createRef(),l.sixDragonsRef=n.a.createRef(),l}return Object(c.a)(t,[{key:"render",value:function(){var e=this,a=this.state.weaponSkillPrimal.map((function(a,t){return n.a.createElement(o,{name:a.skillName,count:a.count,key:"WeaponSkills"+t,index:t,click:e.plusClickPrimal,minusClick:e.minusClickPrimal})})),t=this.state.weaponSkillMagna.map((function(a,t){return n.a.createElement(o,{name:a.skillName,count:a.count,key:"WeaponSkills"+t,index:t,click:e.plusClickMagna,minusClick:e.minusClickMagna})})),l=this.state.weaponSkillOther.map((function(a,t){return n.a.createElement(o,{name:a.skillName,count:a.count,key:"WeaponSkills"+t,index:t,click:e.plusClickOther,minusClick:e.minusClickOther})})),i=this.state.summonsPrimal.map((function(a,t){return n.a.createElement(n.a.Fragment,null," ",n.a.createElement("input",{type:"radio",name:"summons",onChange:function(){return e.setState({primalValue:a.pValue,magnaValue:a.mValue})}})," ",a.name," ",n.a.createElement("br",null))})),u=this.state.summonsMagna.map((function(a,t){return n.a.createElement(n.a.Fragment,null," ",n.a.createElement("input",{type:"radio",name:"summons",onChange:function(){return e.setState({primalValue:a.pValue,magnaValue:a.mValue})}})," ",a.name," ",n.a.createElement("br",null))})),r=this.state.summonsOther.map((function(a,t){return n.a.createElement(n.a.Fragment,null," ",n.a.createElement("input",{type:"radio",name:"summons",onChange:function(){return e.setState({primalValue:a.pValue,magnaValue:a.mValue})}})," ",a.name," ",n.a.createElement("br",null))})),c=this.state.dataPrimal.map((function(a,t){return n.a.createElement(o,{name:a.skillName,count:a.count,key:"dataBoosted"+t,index:t,click:e.boostedplusClick,minusClick:e.boostedminusClick})})),m=this.state.dataMagna.map((function(a,t){return n.a.createElement(o,{name:a.skillName,count:a.count,key:"dataUnboosted"+t,index:t,click:e.unboostedplusClick,minusClick:e.unboostedminusClick})})),s=this.state.weaponSkillPrimal.reduce((function(e,a){return parseFloat(e)+a.count*a.pValue}),0),p=this.state.primalValue?(this.state.primalValue+this.state.primalSubValue)*s:0,d=this.state.weaponSkillMagna.reduce((function(e,a){return parseFloat(e)+a.count*a.mValue}),0),h=this.state.magnaValue?this.state.magnaValue*d:0,k=this.state.weaponSkillOther.reduce((function(e,a){return parseFloat(e)+a.count*a.other}),0),S=Math.min(this.state.dataPrimal.reduce((function(e,a){return parseFloat(e)+a.count*a.da}),0)*(this.state.primalValue+this.state.primalSubValue),50),V=Math.min(this.state.dataPrimal.reduce((function(e,a){return parseFloat(e)+a.count*a.ta}),0)*(this.state.primalValue+this.state.primalSubValue),50),g=Math.min(this.state.dataMagna.reduce((function(e,a){return parseFloat(e)+a.count*a.da}),0)*this.state.magnaValue,50),f=Math.min(this.state.dataMagna.reduce((function(e,a){return parseFloat(e)+a.count*a.ta}),0)*this.state.magnaValue,50);return n.a.createElement("div",{className:"App",style:{marginLeft:"12px"}},n.a.createElement("h2",null,"GBF Crit Calculator "),n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-sm"},n.a.createElement("h3",null,"Primal Crit "),n.a.createElement("table",null,a)),n.a.createElement("div",{class:"col-sm"},n.a.createElement("h3",null,"Magna Crit "),n.a.createElement("table",null,t)),n.a.createElement("div",{class:"col-sm"},n.a.createElement("h3",null,"Unboosted Crit "),n.a.createElement("table",null,l),n.a.createElement("br",null)))),n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-sm"},i,n.a.createElement("div",{class:"custom-control custom-switch"},n.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"customSwitch1",ref:this.sixDragonsRef,onChange:function(){e.sixDragonsRef.current.checked?e.setState({primalSubValue:.2}):e.setState({primalSubValue:0})}}),n.a.createElement("label",{class:"custom-control-label",for:"customSwitch1"}," 6 Dragons MLB subaura"))),n.a.createElement("div",{class:"col-sm"},u),n.a.createElement("div",{class:"col-sm"},r,n.a.createElement(n.a.Fragment,null," ",n.a.createElement("input",{ref:this.customRef,type:"radio",name:"summons",onChange:function(){return e.setState({primalValue:e.primalRef.current.value/100+1,magnaValue:e.magnaRef.current.value/100+1})}})," Custom Multipliers",n.a.createElement("br",null)," Primal ",n.a.createElement("input",{ref:this.primalRef,placeholder:"150",style:{width:"100px"},onChange:function(){var a,t;return(null===(a=e.customRef)||void 0===a||null===(t=a.current)||void 0===t?void 0:t.checked)&&e.setState({primalValue:e.primalRef.current.value/100+1,magnaValue:e.magnaRef.current.value/100+1})}}),n.a.createElement("br",null)," Magna ",n.a.createElement("input",{ref:this.magnaRef,placeholder:"140",style:{width:"100px"},onChange:function(){var a,t;return(null===(a=e.customRef)||void 0===a||null===(t=a.current)||void 0===t?void 0:t.checked)&&e.setState({primalValue:e.primalRef.current.value/100+1,magnaValue:e.magnaRef.current.value/100+1})}}))))),n.a.createElement("br",null),"Current Summon Multipliers: Primal: ",(100*this.state.primalValue+100*this.state.primalSubValue).toFixed(2),"% / Magna: ",(100*this.state.magnaValue).toFixed(2),"%",n.a.createElement("br",null),n.a.createElement("br",null),"Total Crit chance : ",(p+h+k).toFixed(2),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-sm"},n.a.createElement("table",null,n.a.createElement("h3",null,"Primal DATA "),c)),n.a.createElement("div",{class:"col-sm"},n.a.createElement("table",null,n.a.createElement("h3",null,"Magna DATA "),m)),n.a.createElement("div",{class:"col-sm"}))),"Total Data DA/TA ",n.a.createElement("br",null),"Primal: ",S.toFixed(2),"/",V.toFixed(2),n.a.createElement("br",null),"Magna: ",g.toFixed(2),"/",f.toFixed(2),n.a.createElement("br",null),"Combined: ",(S+g).toFixed(2),"/",(V+f).toFixed(2),n.a.createElement("br",null),n.a.createElement("br",null))}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,a,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.b763d361.chunk.js.map