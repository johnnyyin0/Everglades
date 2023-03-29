import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import AddCart from '../../src/components/Overview/AddCart.jsx'

import exampleStyle from '../../src/components/Overview/exampleStyle.js'
import exampleProduct from '../../src/components/Overview/exampleProduct.js'
import testSkus from './skusArray.js'

describe('AddCart', () => {
  it('Should appear on the DOM', () => {
    render(<AddCart styleSelected={exampleStyle[0]} skusArray={testSkus} addCartFunc={true}/>);
    expect(screen.getByTitle('add-cart')).toBeInTheDocument()
  })
})