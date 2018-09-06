import React from "react";
import {CookieStatus} from "./Cookiestatus";
import Adapter from "enzyme-adapter-react-16";

// import renderer from 'react-test-renderer';

import {shallow, configure} from "enzyme";
configure({ adapter: new Adapter() });



describe("Cookie status component when values are passed", () =>{
  let props;
  let cookiestatus;
  beforeEach(() => {
    props = {
      status: { totalCookies: 0, playerLevel: 1, cookiePerSecond: 0},
      statistics: { userClickToNextLevel: 10 }
    };
    cookiestatus = shallow(<CookieStatus {...props}/>).dive();

  });
  it('should display totalCookies value', () => {
    const total = cookiestatus.find('.status__total').text();
    expect(total).toBe("0");
  });

  it('should display playerLevel value', () => {
    const level = cookiestatus.find('.status__level').text();
    expect(level).toBe("1");
  });

  it('should display userClicks value', () => {
    const userClicks = cookiestatus.find('.status__userClick').text();
    expect(userClicks).toBe("10");
  });

  it('should display cookiePerSecond value', () => {
    const cps = cookiestatus.find('.status__CPS').text();
    expect(cps).toBe("0.0");
  });

});

describe("Cookie status component when values are not passed/incomplete", () => {
  let props;
  let cookiestatus;
  beforeEach(() => {
    props = {
      status: { },
      statistics: { }
    };
    cookiestatus = shallow(<CookieStatus {...props}/>).dive();

  });
  it('should display default totalCookies value', () => {
    const total = cookiestatus.find('.status__total').text();
    expect(total).toBe("0");

  });

  it('should display default playerLevel value', () => {
    const level = cookiestatus.find('.status__level').text();
    expect(level).toBe("1");
  });

  it('should display default userClicks value', () => {
    const userClicks = cookiestatus.find('.status__userClick').text();
    expect(userClicks).toBe("0");
  });

  it('should display default cookiePerSecond value', () => {
    const cps = cookiestatus.find('.status__CPS').text();
    expect(cps).toBe("0.0");
  });
})