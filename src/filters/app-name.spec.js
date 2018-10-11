import {appName} from './app-name';
import {expect} from "chai";


describe('App Name Filter', () => {
  it('Should return empty string if argument given is null or undefined or empty string', () => {
    let input = '';
    let expected = '';
    expect(appName(input)).to.equal(expected);

    input = undefined;
    expected = '';
    expect(appName(input)).to.equal(expected);

    input = null;
    expected = '';
    expect(appName(input)).to.equal(expected);

  });

  it('Should return app name if string', () => {
    let input = 'dsocial';
    let expected = 'dsocial';
    expect(appName(input)).to.equal(expected);
  });

  it('Should return app name if object', () => {
    let input = {"name": "dsocial-desktop"};
    let expected = 'dsocial-desktop';
    expect(appName(input)).to.equal(expected);
  });

  it('Should return empty string if given object has no "name" property', () => {
    let input = {"na": "dsocial-desktop"};
    let expected = '';
    expect(appName(input)).to.equal(expected);
  });
});
