import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import ProductName from '../../src/components/Overview/ProductName.jsx'

describe('ProductImage', () => {
  it('Should appear on the DOM', () => {
    render(<ProductName />);
    expect(screen.getByTitle('product-name')).toBeInTheDocument()
  })
})