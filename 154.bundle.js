(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{150:function(e,n,a){"use strict";a.r(n);var l=a(0),t=a.n(l),r=a(100),m=a(19),o=a(102);function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=[],l=!0,t=!1,r=void 0;try{for(var m,o=e[Symbol.iterator]();!(l=(m=o.next()).done)&&(a.push(m.value),!n||a.length!==n);l=!0);}catch(e){t=!0,r=e}finally{try{l||null==o.return||o.return()}finally{if(t)throw r}}return a}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=(()=>{const e=u(Object(l.useState)(null),2),n=e[0],a=e[1];return t.a.createElement("main",null,n&&t.a.createElement("section",null,t.a.createElement("h2",{className:"mar-b-md mar-t-md"},"Submitted Data"),t.a.createElement("ul",null,t.a.createElement("li",null,"TextBox: ",n.formValues.userName),t.a.createElement("li",null,"EmailInput: ",n.formValues.userEmail),t.a.createElement("li",null,"UrlInput: ",n.formValues.webAddress),t.a.createElement("li",null,"Telephone: ",n.formValues.telephoneNumber),t.a.createElement("li",null,"TextArea: ",n.formValues.message))),t.a.createElement("section",null,t.a.createElement("h2",{className:"mar-b-md mar-t-md"},"Native Attributes"),t.a.createElement("div",null,t.a.createElement(o.g,{name:"inputsForm",onSubmit:e=>{console.log("Name",e.userName),console.log("Email",e.userEmail),console.log("Message",e.message),console.log("URL",e.webAddress),console.log("Telephone",e.telephoneNumber),a({formValues:e})}},t.a.createElement(o.p,{name:"name",label:"TextBox",initialValue:"",required:!0}),t.a.createElement(o.e,{name:"emailAddress",label:"Email Input",initialValue:""}),t.a.createElement(o.q,{name:"webAddress",label:"UrlInput",initialValue:"",placeholder:"https://www.example.com",required:!0}),t.a.createElement(o.n,{name:"telephoneNumber",label:"Telephone Number",initialValue:""}),t.a.createElement(o.o,{label:"TextArea",name:"message"}),t.a.createElement(o.a,null,"Send"))),t.a.createElement("div",{className:"mar-b-md mar-t-md"},t.a.createElement(r.a,{language:"jsx",style:m.tomorrow},'\n  import React, { Component, createRef } from \'react\'\n  import {\n    Button,\n    Form,\n    TextBox,\n  } from \'react-form-elements\'\n\n  export default () =>\n    (<Form\n      name="attributesForm"\n      onSubmit={values => {}}\n    >\n    <TextBox name="name" label="TextBox" initialValue="" required />\n    <EmailInput\n      name="emailAddress"\n      label="Email Input"\n      initialValue=""\n    />\n    <UrlInput\n      name="webAddress"\n      label="UrlInput"\n      initialValue=""\n      placeholder="https://www.example.com"\n      required\n    />\n    <Telephone\n      name="telephoneNumber"\n      label="Telephone Number"\n      initialValue=""\n    />\n    <TextArea label="TextArea" name="message" />\n    <Button>Send</Button>\n    </Form>)\n  '))))})}}]);