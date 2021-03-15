---
title: test
order: 10
group:
  title: Other
  path: /other
  order: 10
nav:
  title: front-end document
  path: /doc
  order: 100
---

UI testing is an important part of the project development process. Effective test cases can sort out business requirements, ensure the quality and progress of research and development, and allow engineers to refactor code and add new features with confidence.

next-dev encapsulates a set of simple and easy-to-use React unit tests and E2E test solutions. Run the following commands in the project root directory to run the test cases.

```bash
$ npm run test:all # execute all tests
```

<img style="box-shadow:none; margin:0; " src="https://gw.alipayobjects.com/zos/rmsportal/EFKJzIswQgWNJzDQNpKr.png" width="700" />

The following briefly introduces how to write your business test cases in the project.

## unit test

Unit testing is used to test the performance of React UI components. We refer to [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests), use [ jest](http://facebook.github.io/jest/) as the testing framework.

jest is a test framework that runs on the node side. It uses jsdom to simulate the DOM environment. It is suitable for quickly testing the logical performance of React components. For real browsers, please refer to the E2E test section.

### Write a use case

For example, we can create a file `src/routes/Result/Success.test.js` to test the UI performance of the success page component.

```tsx | pure
import React from 'react';
import { shallow } from 'enzyme';
import Success from './Success'; // Import the corresponding React component

it('renders with Result', () => {
  const wrapper = shallow(<Success />); // render
  expect(wrapper.find('Result').length).toBe(1); // There is a Result component
  expect(wrapper.find('Result').prop('type')).toBe('success'); // The type of Result component is success
});
```

Here, [enzyme](http://airbnb.io/enzyme/docs/api/index.html) is used as the test library, which provides a large number of useful APIs to help us test React components. The assertion part follows jest's default [jasmine2 expect syntax](https://facebook.github.io/jest/docs/en/expect.html#content).

### Local execution

Use the following commands to search and execute the use case files in the format of `*.test.js` under `src`.

```bash
$ npm test .test.js
```

#### Execute a single or group of use cases

```bash
$ npm test src/routes/Result/Success.test.js  # 测试 Success.test.js
$ npm test src/routes # Test all use case files under routes
```

### Test the dva package component

React components that are dva `connect` can be tested in the following ways.

```tsx | pure
import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

it('renders Dashboard', () => {
  // Use packaged components
  const wrapper = shallow(<Dashboard.WrappedComponent user={{ list: [] }} />);
  expect(wrapper.find('Table').props().dataSource).toEqual([]);
});
```

## e2e test

End-to-end testing is also called smoke testing. It is used to test the flow and performance of front-end applications in a real browser environment, which is equivalent to replacing manual operations with applications.

We introduced [puppeteer](https://github.com/googlechrome/puppeteer) as a tool for E2E testing. Puppeteer is the official headless Chrome tool of the Google Chrome team. It uses chrome / chromium as the browser environment to run your application by default, and provides a very semantic API to describe business logic.

### Write an e2e use case

Suppose there is a requirement that the user enters the wrong user name and password on the login page, and after clicking login, an error message box appears.

<img src="https://gw.alipayobjects.com/zos/rmsportal/oZeYewGOUJkmqXAPoOFC.gif" width="400" />

We write a use case to protect this process. Create a `Login.e2e.js` file under the `src/e2e/` directory, and describe the test case according to the above business requirements.

```js
import puppeteer from 'puppeteer';

describe('Login', () => {
  it('should login with failure', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.type('#userName', 'mockuser');
    await page.type('#password', 'wrong_password');
    await page.click('button[type="submit"]');
    await page.waitForSelector('.ant-alert-error'); // should display error
    await page.close();
    browser.close();
  });
});
```

For more puppeteer methods, please refer to [puppeteer/docs/api.md](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md).

### Run use cases

Running the following command will execute all `*.e2e.js` use case files under src.

```bash
$ npm test .e2e.js
```

<img src="https://gw.alipayobjects.com/zos/rmsportal/LGCXopksUYMUhjRgdYSz.png" width="700" />

> Note that the local test e2e use case needs to start `npm start`, otherwise an error of `Failed: navigation error` will be reported.

## watch mode

```
$ npm test -- --watch
```

Add `--watch` configuration to enter watch mode. When you modify and save the file, Jest will automatically execute the corresponding application example. Jest's command line tool also provides a variety of convenient shortcut keys to perform the use cases you need.

<img src="https://gw.alipayobjects.com/zos/rmsportal/MnmxiavystfcBDskyKRg.png" width="700" />

## Test coverage

```
$ npm test -- --coverage
```

Add `--coverage` configuration to display the test coverage of the project.

<img src="https://camo.githubusercontent.com/bd0bbda8e44ea747e4c199d0e212d40563ad2fcb/687474703a2f2f692e696d6775722e636f6d2f356246686e54532e706e67" width="700" />

## Focus and ignore use cases

Using `xit()` instead of `it()` can temporarily ignore the use case, and `fit()` can focus on the current use case and ignore all other use cases. These two methods can help you focus only on the use cases you currently need during the development process.

## Access integration test service

If you need to access travis, CircleCI, Gitlab CI and other integrated test environments, you can refer to the `.travis.yml` provided by this repository.

Note that e2e testing requires an integrated environment to support electron. If not, you can use `npm test .test.js` to run unit tests separately.

## Reference link

For more testing techniques and functions, please refer to the following link.

- [create-react-app tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
- [is] (https://facebook.github.io/jest/)
- [enzyme](http://airbnb.io/enzyme/)
- [puppeteer](https://github.com/googlechrome/puppeteer)
- [Using with puppeteer](https://facebook.github.io/jest/docs/en/puppeteer.html)
