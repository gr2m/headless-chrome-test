const HeadlessChrome = require('simple-headless-chrome')
const test = require('tap').test

const browser = new HeadlessChrome({
  headless: true
})

test('example.com', async function (t) {
  await browser.init()
  await browser.goTo('https://example.com')
  const result = await browser.evaluate(() => document.title)
  await browser.close(true)

  t.equal(result.result.value, 'Example Domain', 'Page title is "Example Domain"')

  t.end()
})
