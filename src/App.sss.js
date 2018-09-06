import React from 'react';
import App from './App';
import Adapter from "enzyme-adapter-react-16";
// import renderer from 'react-test-renderer';

import {shallow, configure} from "enzyme";
configure({ adapter: new Adapter() });



describe("App component has ", () =>{
  it('should test', () => {
    const cookiestatus = shallow(<App />).dive();
    debugger;

  });
});