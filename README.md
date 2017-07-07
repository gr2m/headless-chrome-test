# headless-chrome-test

> Example of how to use headless Chrome in your tests & CI

## Requirements

You must have Node 59+ installed as this is the version that [introduced the
headless feature](https://developers.google.com/web/updates/2017/04/headless-chrome).

You also need Node 7.6+ for the test to run as this example is using
[simple-headless-chrome](https://www.npmjs.com/package/simple-headless-chrome)
which is utilising async/await. Previous Node versions lack support for it

## Setup

```
npm install
npm test
```
