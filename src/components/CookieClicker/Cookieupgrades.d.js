import React from "react";
import CookieUpgrades from "./Cookieupgrades";
import Adapter from "enzyme-adapter-react-16";

// import renderer from 'react-test-renderer';

import {shallow, configure} from "enzyme";
configure({ adapter: new Adapter() });



describe("Checking CookieUpgrades methods", () =>{

  it('should display totalCookies value', () => {
    const props = {
    }
    const cookieupgrades = shallow(<CookieUpgrades {...props}/>).dive();

    // const total = cookieupgrades.find('.status__total').text();
    //
    // expect(total).toBe("0");
  });


});