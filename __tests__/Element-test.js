import 'react-native';
import React from 'react';
import Home from '../src/Home';

import renderer from 'react-test-renderer';
import {it} from '@jest/globals';

let findElement = function (tree, element) {
//   console.warn(tree.children);

  let result;

  for (let node in tree.children) {
    if (tree.children[node].props.testID === element) {
      result = true;
    }
  }
  return result;
};

it('find Element', () => {
  let tree = renderer.create(<Home />).toJSON();

  expect(findElement(tree, 'username')).toBeDefined();
});
