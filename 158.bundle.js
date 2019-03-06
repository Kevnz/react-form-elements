(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(100),m=a(19),i=a(102);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var m,i=e[Symbol.iterator]();!(n=(m=i.next()).done)&&(a.push(m.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=(()=>{const e=o(Object(n.useState)(null),2),t=e[0],a=e[1];return r.a.createElement("main",null,t&&r.a.createElement("section",null,r.a.createElement("h2",{className:"mar-b-md mar-t-md"},"Submitted Data"),r.a.createElement("ul",null,r.a.createElement("li",null,"Meter: ",t.formValues.meter),r.a.createElement("li",null,"High Meter: ",t.formValues.highMeter),r.a.createElement("li",null,"Low Meter: ",t.formValues.lowMeter))),r.a.createElement("section",null,r.a.createElement("h2",{className:"mar-b-md mar-t-md"},"Other Elements"),r.a.createElement("div",null,r.a.createElement(i.g,{name:"inputsForm",onSubmit:e=>{a({formValues:e})}},r.a.createElement(i.h,{label:"Meter",name:"meter",initialValue:30,min:10,max:50,low:15,high:40,optimum:30}),r.a.createElement(i.h,{label:"High Meter",name:"highMeter",initialValue:41,min:10,max:50,low:15,high:40,optimum:30}),r.a.createElement(i.h,{label:"Low Meter",name:"lowMeter",initialValue:12,min:10,max:50,low:15,high:40,optimum:30}),r.a.createElement(i.l,{initialValue:35,label:"Progress Bar",name:"progressBar"}),r.a.createElement(i.a,null,"Check")),r.a.createElement("div",{className:"pad-t-md"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://css-tricks.com/html5-meter-element/",target:"blank"},"For information styling a the Meter element"," ")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://css-tricks.com/html5-progress-element/",target:"blank"},"For information styling a the Progress element"," ")))),r.a.createElement("div",{className:"mar-b-md mar-t-md"},r.a.createElement("h3",{className:"mar-b-md"},"Code from Example"),r.a.createElement(l.a,{language:"jsx",style:m.tomorrow},'\n  import React, { Component, createRef } from \'react\'\n  import {\n    Form,\n    Meter,\n    Progress,\n  } from \'react-form-elements\'\n\n  export default () =>\n    (<Form>\n      <Meter\n        label="Meter"\n        name="meter"\n        initialValue={30}\n        min={10}\n        max={50}\n        low={15}\n        high={40}\n        optimum={30}\n      />\n      <Progress\n        initialValue={35}\n        label="Progress Bar"\n        name="progressBar"\n      />\n    </Form>)\n  ')))))})}}]);