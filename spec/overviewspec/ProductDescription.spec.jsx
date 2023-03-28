import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import ProductDescription from '../../src/components/Overview/ProductDescription.jsx'

describe('ProductDescription', () => {
  it('Should appear on the DOM', () => {
    render(<ProductDescription />);
    expect(screen.getByTitle('product-description')).toBeInTheDocument()
  })
})