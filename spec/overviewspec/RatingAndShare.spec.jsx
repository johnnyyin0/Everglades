import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import RatingsAndShare from '../../src/components/Overview/RatingsAndShare.jsx'
import exampleProduct from '../../src/components/Overview/exampleProduct.js'
describe('RatingsAndShare', () => {
  it('Should appear on the DOM', () => {
    render(<RatingsAndShare currentProduct={exampleProduct} photo={true} />);
    expect(screen.getByTitle('rating-and-share')).toBeInTheDocument()
  })
})