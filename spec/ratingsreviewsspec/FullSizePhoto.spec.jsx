import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent, queryByText} from '@testing-library/react'
import FullSizePhoto from '../../src/components/RatingsReviews/FullSizePhoto.jsx'

describe('FullSizePhoto', () => {
  it('Should appear on the DOM', () => {
    render(<FullSizePhoto />);
    expect(screen.getByTitle('fullsize-review-photo')).toBeInTheDocument()
  })
})