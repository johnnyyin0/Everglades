import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import ProductName from '../../src/components/Overview/productName.jsx'
import exampleProduct from '../../src/components/Overview/exampleProduct.js'
import exampleStyle from '../../src/components/Overview/exampleStyle.js'

describe('ProductImage', () => {
  it('Should appear on the DOM', () => {
    render(<ProductName currentProduct={exampleProduct} styleSelected={exampleStyle[0]}/>);
    expect(screen.getByTitle('product-name')).toBeInTheDocument()
  })
})