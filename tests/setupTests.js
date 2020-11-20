import MockDate from 'mockdate';
import moment from 'moment-timezone';
import { enableFetchMocks } from 'jest-fetch-mock';

/* eslint-disable global-require */
if (typeof window !== 'undefined') {
  global.window.resizeTo = (width, height) => {
    global.window.innerWidth = width || global.window.innerWidth;
    global.window.innerHeight = height || global.window.innerHeight;
    global.window.dispatchEvent(new Event('resize'));
  };
  global.window.scrollTo = () => {};
  // ref: https://github.com/ant-design/ant-design/issues/18774
  if (!window.matchMedia) {
    Object.defineProperty(global.window, 'matchMedia', {
      value: jest.fn(() => ({
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  }
}

const Enzyme = require('enzyme');

Object.assign(Enzyme.ReactWrapper.prototype, {
  findObserver() {
    return this.find('ResizeObserver');
  },
  triggerResize() {
    const ob = this.findObserver();
    ob.instance().onResize([{ target: ob.getDOMNode() }]);
  },
});

enableFetchMocks();

global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function requestAnimationFrame(cb) {
    return setTimeout(cb, 0);
  };

global.cancelAnimationFrame =
  global.cancelAnimationFrame ||
  function cancelAnimationFrame() {
    return null;
  };
// browserMocks.js
const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

Object.defineProperty(window, 'cancelAnimationFrame', {
  value: () => null,
});

MockDate.set(moment('2016-11-22 15:22:44').valueOf());

const mockFormatExpression = {
  format: (value) => `￥ ${value.toString()}`,
};
Intl.NumberFormat = jest.fn().mockImplementation(() => mockFormatExpression);

moment.tz.setDefault('UTC');

Math.random = () => 0.8404419276253765;

// fetch.mockResponse(async () => {
//   return { body: JSON.stringify(tableData) };
// });
