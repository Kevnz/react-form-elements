(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{248:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),r=l(28);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var l=[],a=!0,n=!1,r=void 0;try{for(var m,i=e[Symbol.iterator]();!(a=(m=i.next()).done)&&(l.push(m.value),!t||l.length!==t);a=!0);}catch(e){n=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}return l}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=(()=>{const e=m(Object(a.useState)(null),2),t=e[0],l=e[1];return n.a.createElement("main",null,t&&n.a.createElement("section",null,n.a.createElement("h3",null,"Submitted Data"),n.a.createElement("ul",null,n.a.createElement("li",null,"Meter: ",t.formValues.meter),n.a.createElement("li",null,"High Meter: ",t.formValues.highMeter),n.a.createElement("li",null,"Low Meter: ",t.formValues.lowMeter))),n.a.createElement("section",null,n.a.createElement("h2",null,"Other Elements"),n.a.createElement("div",null,n.a.createElement(r.f,{name:"inputsForm",onSubmit:e=>{l({formValues:e})}},n.a.createElement(r.g,{label:"Meter",name:"meter",initialValue:30,min:10,max:50,low:15,high:40,optimum:30}),n.a.createElement(r.g,{label:"High Meter",name:"highMeter",initialValue:41,min:10,max:50,low:15,high:40,optimum:30}),n.a.createElement(r.g,{label:"Low Meter",name:"lowMeter",initialValue:12,min:10,max:50,low:15,high:40,optimum:30}),n.a.createElement(r.j,{initialValue:35,label:"Progress Bar",name:"progressBar"}),n.a.createElement(r.a,null,"Check")),n.a.createElement("div",{className:"pad-t-md"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://css-tricks.com/html5-meter-element/",target:"blank"},"For information styling a the Meter element"," ")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://css-tricks.com/html5-progress-element/",target:"blank"},"For information styling a the Progress element"," ")))))))})}}]);