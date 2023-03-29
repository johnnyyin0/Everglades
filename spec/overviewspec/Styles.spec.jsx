import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import Styles from '../../src/components/Overview/styles.jsx'
import exampleProduct from '../../src/components/Overview/exampleProduct.js'
import exampleStyle from '../../src/components/Overview/exampleStyle.js'
describe('Styles', () => {
  it('Should appear on the DOM', () => {
    render(<Styles currentStyle={exampleStyle} setPhoto={true} setSelectedStyle={true} styleSelected={exampleStyle} createSkusArray={true}/>);
    expect(screen.getByTitle('styles')).toBeInTheDocument()
  })
})