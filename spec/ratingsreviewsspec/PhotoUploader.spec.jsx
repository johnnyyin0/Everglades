import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent, queryByText} from '@testing-library/react'
import PhotoUploader from '../../src/components/RatingsReviews/PhotoUploader.jsx'

//expects photos, setPhotos, setPhoto, showButton, setShowButton props

describe('PhotoUploader', () => {

  const props = {};
  props.photos = [];
  props.setPhotos = vi.fn();
  props.showButton = true;
  props.setShowButton = vi.fn();

  it('Should appear on the DOM', () => {
    render(<PhotoUploader {...props}/>);
    expect(screen.getByTitle('photo-uploader')).toBeInTheDocument()
  })
})