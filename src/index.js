import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { readJSONSync } from '@withtypes/fs-extra'
import { isEmpty } from '@bassist/node-utils'
import { randomString } from '@bassist/utils'

async function run() {
  // Now this template is ES Module enabled,
  // so by default, you need to declare the __dirname variable.
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  // Read package info
  const pkgPath = resolve(__dirname, '../package.json')
  const { name, description } = readJSONSync(pkgPath)
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
