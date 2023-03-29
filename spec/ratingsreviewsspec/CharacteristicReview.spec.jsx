import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent, queryByText} from '@testing-library/react'
import sampleMeta from './sampleMeta.js'
import CharacteristicReview from '../../src/components/RatingsReviews/CharacteristicReview.jsx'

//expects chars, charRatings, setCharRatings, setCharsFilled props

//renders CharRadioSelector

describe('CharacteristicReview', () => {

  const props = {};
  props.chars = sampleMeta.characteristics;
  props.charRatings = {};
  props.setCharRatings = vi.fn();
  props.setCharsFilled = vi.fn();

  it('Should appear on the DOM', () => {
    render(<CharacteristicReview {...props}/>);
    expect(screen.getByTitle('characteristic-review')).toBeInTheDocument()
  })
})