import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import FullScreen from '../../src/components/Overview/FullScreen.jsx'

describe('FullScreen', () => {
  it('Should appear on the DOM', () => {
    render(<FullScreen />);
    expect(screen.getByTitle('fullscreen-photo')).toBeInTheDocument()
  })
})