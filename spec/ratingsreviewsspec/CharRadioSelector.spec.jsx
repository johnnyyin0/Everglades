import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent, queryByText} from '@testing-library/react'
import sampleMeta from './sampleMeta.js'
import CharRadioSelector from '../../src/components/RatingsReviews/CharRadioSelector.jsx'

//expects chars, fitChar, id, best, worst, charRatings, setCharRatings, setCharsFilled props

describe('CharRadioSelector', () => {

  const props = {};
  props.chars = sampleMeta.characteristics;
  props.fitChar = 'Strength';
  props.id = 37114;
  props.best = 'strong';
  props.worst = 'weak';
  props.charRatings = {};
  props.setCharRatings = vi.fn();
  props.setCharsFilled = vi.fn();

  it('Should appear on the DOM', () => {
    render(<CharRadioSelector {...props}/>);
    expect(screen.getByTitle('characteristic-radio-selector')).toBeInTheDocument()
  })
})