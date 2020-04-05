import { equal } from 'assert'
import { main } from '../src'

describe('main', () => {
  it('returns "Hi there"', async () => equal(await main(), 'Hi there'))
})
