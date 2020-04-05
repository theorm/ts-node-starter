import { equal } from 'assert'
import { main } from '../src'

describe('main', () => {
  it('returns done', async () => {
    equal(await main(), 'Hi there')
  })
})
