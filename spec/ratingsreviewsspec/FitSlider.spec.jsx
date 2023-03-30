import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import sampleMeta from './sampleMeta.js'
import sampleReviewData from './sampleReviewData.js'
import FitSlider from '../../src/components/RatingsReviews/FitSlider.jsx'

//expects fitChar, charId, charVal props

describe('FitSlider', () => {
  const props = {};
  props.fitChar = "Size";
  props.charId = "27739";
  props.charVal = 3.9891234

  it('Should render to the DOM', () => {
    render(<FitSlider {...props} />);
    expect(screen.getByTitle('fit-slider')).toBeInTheDocument
  })
})