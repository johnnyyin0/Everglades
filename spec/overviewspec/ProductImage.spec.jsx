import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import ProductImage from '../../src/components/Overview/ProductImage.jsx'

describe('ProductImage', () => {
  it('Should appear on the DOM', () => {
    render(<ProductImage />);
    expect(screen.getByTitle('product-image')).toBeInTheDocument()
  })
})
