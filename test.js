const HeadlessChrome = require('simple-headless-chrome')
const test = require('tap').test

test('Headless Chrome', async function (group) {
  const browser = new HeadlessChrome({
    headless: false
  })
  await browser.init()

  group.test('example.com', async function (t) {
    // see available actions https://git.io/vQKpy
    await browser.goTo('https://example.com')
    const result = await browser.evaluate(() => document.title)

    t.equal(result.result.value, 'Example Domain', 'Page title is "Example Domain"')

    t.end()
  })

  group.test('Notes PWA', async function (t) {
    // see available actions https://git.io/vQKpy
    await browser.goTo('https://sii.im/playground/notes/')
    await browser.type('form input', 'Remember the milk\r')
    const result = await browser.evaluate(() => document.querySelector('ul').textContent.trim())

    t.equal(result.result.value, 'Remember the milk', 'Adds "Remember the milk" to list')

    // TODO: figure out how to simulate Chrome being "offline"

    t.end()
  })

  group.tearDown(async () => {
    // true = kill with SIGHUP
    // https://git.io/vQKpP
    await browser.close(true)
  })
})
