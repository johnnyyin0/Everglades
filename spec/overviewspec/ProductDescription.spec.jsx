import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import ProductDescription from '../../src/components/Overview/ProductDescription.jsx'

import exampleStyle from '../../src/components/Overview/exampleStyle.js'
import exampleProduct from '../../src/components/Overview/exampleProduct.js'

describe('ProductDescription', () => {
  it('Should appear on the DOM', () => {
    render(<ProductDescription currentProduct={exampleProduct}/>);
    expect(screen.getByTitle('product-description')).toBeInTheDocument()
  })
})