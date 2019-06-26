(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{134:function(e,a,n){"use strict";n.r(a);var l=n(0),t=n.n(l),m=n(83),r=n(17),o=n(87);a.default=()=>{const[e,a]=Object(l.useState)(null);return t.a.createElement("main",null,e&&t.a.createElement("section",null,t.a.createElement("h2",{className:"mar-b-md mar-t-md"},"Submitted Data"),t.a.createElement("ul",null,t.a.createElement("li",null,"TextBox: ",e.formValues.userName),t.a.createElement("li",null,"EmailInput: ",e.formValues.userEmail),t.a.createElement("li",null,"UrlInput: ",e.formValues.webAddress),t.a.createElement("li",null,"Telephone: ",e.formValues.telephoneNumber),t.a.createElement("li",null,"TextArea: ",e.formValues.message))),t.a.createElement("section",null,t.a.createElement("h2",{className:"mar-b-md mar-t-md"},"Native Attributes"),t.a.createElement("div",null,t.a.createElement(o.g,{name:"inputsForm",onSubmit:e=>{console.info("Name",e.userName),console.info("Email",e.userEmail),console.info("Message",e.message),console.info("URL",e.webAddress),console.info("Telephone",e.telephoneNumber),a({formValues:e})}},t.a.createElement(o.q,{name:"name",label:"TextBox",initialValue:"",required:!0}),t.a.createElement(o.e,{name:"emailAddress",label:"Email Input",initialValue:""}),t.a.createElement(o.r,{name:"webAddress",label:"UrlInput",initialValue:"",placeholder:"https://www.example.com",required:!0}),t.a.createElement(o.o,{name:"telephoneNumber",label:"Telephone Number",initialValue:""}),t.a.createElement(o.p,{label:"TextArea",name:"message"}),t.a.createElement(o.a,null,"Send"))),t.a.createElement("div",{className:"mar-b-md mar-t-md"},t.a.createElement(m.a,{language:"jsx",style:r.tomorrow},'\n  import React, { Component, createRef } from \'react\'\n  import {\n    Button,\n    Form,\n    TextBox,\n  } from \'react-form-elements\'\n\n  export default () =>\n    (<Form\n      name="attributesForm"\n      onSubmit={values => {}}\n    >\n    <TextBox name="name" label="TextBox" initialValue="" required />\n    <EmailInput\n      name="emailAddress"\n      label="Email Input"\n      initialValue=""\n    />\n    <UrlInput\n      name="webAddress"\n      label="UrlInput"\n      initialValue=""\n      placeholder="https://www.example.com"\n      required\n    />\n    <Telephone\n      name="telephoneNumber"\n      label="Telephone Number"\n      initialValue=""\n    />\n    <TextArea label="TextArea" name="message" />\n    <Button>Send</Button>\n    </Form>)\n  '))))}}}]);