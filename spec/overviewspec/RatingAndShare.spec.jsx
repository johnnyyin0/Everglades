import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import RatingsAndShare from '../../src/components/Overview/RatingsAndShare.jsx'

describe('RatingsAndShare', () => {
  it('Should appear on the DOM', () => {
    render(<RatingsAndShare />);
    expect(screen.getByTitle('rating-and-share')).toBeInTheDocument()
  })
})