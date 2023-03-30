import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import FullScreen from '../../src/components/Overview/FullScreen.jsx'

import exampleStyle from '../../src/components/Overview/exampleStyle.js'
import exampleProduct from '../../src/components/Overview/exampleProduct.js'

describe('FullScreen', () => {
  it('Should appear on the DOM', () => {
    render(<FullScreen setFullScreen={true} styleSelected={exampleStyle[0]} index={0} setIndex={true} setPhoto={true} nextButton={true} backButton={true}/>);
    expect(screen.getByTitle('fullscreen-photo')).toBeInTheDocument()
  })
})