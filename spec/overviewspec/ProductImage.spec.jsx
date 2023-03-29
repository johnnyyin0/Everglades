import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import ProductImage from '../../src/components/Overview/ProductImage.jsx'
import exampleStyle from '../../src/components/Overview/exampleStyle.js'
describe('ProductImage', () => {
  it('Should appear on the DOM', () => {
    render(<ProductImage photo={true} styleSelected={exampleStyle[0]} setPhoto={true} setFullScreen={true} setIndex={true} index={true} nextButton={true} backButton={true}/>);
    expect(screen.getByTitle('product-image')).toBeInTheDocument()
  })
})
