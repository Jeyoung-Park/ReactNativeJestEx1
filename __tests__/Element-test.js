import {expect, it} from '@jest/globals';
import Users from '../src/users';

it('Api Test', async function () {
  global.fetch = jest.fn().mockImplementation(() => {
    let p = new Promise((resolve, reject) => {
      resolve({
        json: function () {
          return {Id: 1};
        },
      });
    });
    return p;
  });

  const response = await Users.all();
  expect(response.Id).toBe(1);
});
