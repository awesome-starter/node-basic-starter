const { resolve } = require('path')
const { readJSONSync } = require('@withtypes/fs-extra')
const { isEmpty } = require('@bassist/node-utils')
const { randomString } = require('@bassist/utils')

async function run() {
  // Read package info
  const { name, description } = readJSONSync(
    resolve(__dirname, '../package.json')
  )
  console.log('Package Info:')
  console.log({ name, description })
  console.log()

  // Use some wrapped Node methods
  // https://paka.dev/npm/@bassist/node-utils
  console.log('Check the `src` folder is empty:')
  console.log(isEmpty(resolve(__dirname)))
  console.log()

  // Use some commonly used utility functions
  // https://paka.dev/npm/@bassist/utils
  console.log('Get a random string:')
  console.log(randomString())
  console.log()
}
run().catch((e) => {
  console.log(e)
})
