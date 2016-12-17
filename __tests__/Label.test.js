import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Label from '../src';

describe('<Label /> component', function() {

  it('should label exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<Label />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
