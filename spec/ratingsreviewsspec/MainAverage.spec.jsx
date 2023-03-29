import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import MainAverage from '../../src/components/RatingsReviews/MainAverage.jsx'

//takes in avgReview, pctRecommended
//renders starsWidget

describe('MainAverage', () => {
  let props = {};
  props.avgReview = 3.9;
  props.pctRecommended = 82
  it('should exist on the Dom', () => {
    render(<MainAverage {...props} />)
    expect(screen.getByTitle('main-average')).toBeInTheDocument()
  })
})