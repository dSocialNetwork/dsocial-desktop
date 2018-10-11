import {protocolUrl2Obj} from './protocol';
import {expect} from "chai";

describe('Protocol url to object', () => {
  it('protocolUrl2Obj post 1', () => {
    const input = `dpay://dsocial/@good-karma/dsocial-desktop-1-0-3-update-comment-encryption-delegation-reader-view-72f47edf4a025`;
    const expected = {
      type: 'post',
      cat: 'dsocial',
      author: 'good-karma',
      permlink: 'dsocial-desktop-1-0-3-update-comment-encryption-delegation-reader-view-72f47edf4a025'
    };
    expect(protocolUrl2Obj(input)).to.deep.equal(expected);
  });

  it('protocolUrl2Obj post 2', () => {
    const input = `dsocial://dsocial/@dsocial/dsocial-desktop-tips-4-voting-perentage-87f0ebb67ae0e/`;
    const expected = {
      type: 'post',
      cat: 'dsocial',
      author: 'dsocial',
      permlink: 'dsocial-desktop-tips-4-voting-perentage-87f0ebb67ae0e'
    };
    expect(protocolUrl2Obj(input)).to.deep.equal(expected);
  });

  it('protocolUrl2Obj account 1', () => {
    const input = `dpay://@good-karma`;
    const expected = {
      type: 'account',
      account: 'good-karma',
    };
    expect(protocolUrl2Obj(input)).to.deep.equal(expected);
  });

  it('protocolUrl2Obj account 2', () => {
    const input = `dsocial://@talhasch/`;
    const expected = {
      type: 'account',
      account: 'talhasch',
    };
    expect(protocolUrl2Obj(input)).to.deep.equal(expected);
  });

  it('protocolUrl2Obj filter', () => {
    const input = `dpay://trending`;
    const expected = {
      type: 'filter',
      filter: 'trending',
    };
    expect(protocolUrl2Obj(input)).to.deep.equal(expected);
  });

  it('protocolUrl2Obj filter with tag', () => {
    const input = `dsocial://trending/dsocial`;
    const expected = {
      type: 'filter-tag',
      filter: 'trending',
      tag: 'dsocial'
    };
    expect(protocolUrl2Obj(input)).to.deep.equal(expected);
  });

  it('should return undefined', () => {
    const input = `dpay://foobarbaz`;
    const expected = undefined;
    expect(protocolUrl2Obj(input)).to.deep.equal(expected);
  });
});
