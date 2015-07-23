import React from 'react/addons';
import assert from 'assert';
import TextBox from '../src/textbox';
let TestUtils = React.addons.TestUtils;


        
describe('TextBox component',() => {
    describe('The Rendered HTML', () => {
        var component, textbox;
        before('render and locate textbox element', () => {
            console.log('render into document');
            console.log(self);
            this.component = TestUtils.renderIntoDocument(<TextBox  />); 
            this.texbox = TestUtils.findRenderedDOMComponentWithClass(
                component,
                'form-row_container'
            );
            console.log(textbox)
        });
    
        it('should have a label', () => {  
            assert(self.textbox.getDOMNode().querySelector('label') );
        });
        
    });


});