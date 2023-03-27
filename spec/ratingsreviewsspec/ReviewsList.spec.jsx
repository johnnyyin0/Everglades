import { assert, expect, it } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import ReviewsList from '../../src/components/RatingsReviews/ReviewsList.jsx'

//requires id, setPhoto, shownReviews, setShownReviews, allReviews, setAllReviews, sort, setSort
//renders ReviewTile(s), SortDropDown