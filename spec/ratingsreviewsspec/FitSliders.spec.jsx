import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import sampleMeta from './sampleMeta.js'
import FitSliders from '../../src/components/RatingsReviews/FitSliders.jsx'

//needs a 'characteristics' prop

describe('FitSliders', () => {
  it('Should render to the DOM', () => {
    render(<FitSliders characteristics={sampleMeta.characteristics}/>);
    expect(screen.getByTitle('fit-sliders')).toBeInTheDocument()
  });
  it('Should render a FitSlider for each present characteristic', () => {
    render(<FitSliders characteristics={sampleMeta.characteristics} />);
    expect(screen.getAllByTitle('fit-slider').length).toBe(Object.keys(sampleMeta.characteristics).length)
  })
})