import { capitalizeFirstLetter, stripWordFromArrayOfString } from './index';

const mockedDataFromApi = [{
  one: 'testingTOREPLACEtest',
  two: 'testing',
  three: 'moretestTOREPALx',
  four: {
    five: {
      six: ['one', 'TOREPLACE-', 'TORrent'],
    },
  },
}];

const mockedProcessedData = [{
  one: 'testingtest',
  two: 'testing',
  three: 'moretestTOREPALx',
  four: {
    five: {
      six: ['one', 'TOREPLACE-', 'TORrent'],
    },
  },
}];

test('it should capitilize first letter ', () => {
  expect(capitalizeFirstLetter('matthew')).toBe('Matthew');
});

test('it should strip part of string from a given object', () => {
  expect(stripWordFromArrayOfString('TOREPLACE', mockedDataFromApi, 'one')).toMatchObject(mockedProcessedData);
});

