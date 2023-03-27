import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import Styles from '../../src/components/Overview/Styles.jsx'

describe('Styles', () => {
  it('Should appear on the DOM', () => {
    render(<Styles />);
    expect(screen.getByTitle('styles')).toBeInTheDocument()
  })
})