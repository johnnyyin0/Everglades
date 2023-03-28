import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import AddCart from '../../src/components/Overview/AddCart.jsx'

describe('AddCart', () => {
  it('Should appear on the DOM', () => {
    render(<AddCart />);
    expect(screen.getByTitle('add-cart')).toBeInTheDocument()
  })
})