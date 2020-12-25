# Contributing to wetrials

## Set up

Install dev deps after git clone the repo.

```bash
$ yarn
```

## Common Tasks

Transform with babel and rollup.

```bash

# Start in the development environment
$ yarn start

# Build
$ yarn build

# Build and monitor file changes
$ yarn build --watch

# Build specified package only
$ PACKAGE=plugin-antd yarn build --watch
```

Run test.

```bash
$ yarn test

# Test specified file and watch
$ yarn test getMockData.test.js -w

# Test specified package
$ yarn test --package core

# Generate coverage
$ yarn test --coverage
```

## Release

1. Modify the version number in the corresponding package package.json
2. Tag, the tag rule is package + version

```bash
# Take core package as an example
git tag @wetrial/core@1.0.0-beta1
```

3. Submit according to the git commit specification (will be released automatically)

> Please refer to https://www.conventionalcommits.org/en/v1.0.0/ for git submit specifications
