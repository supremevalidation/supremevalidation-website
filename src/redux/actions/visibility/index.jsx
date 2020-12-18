import { HEADER_VISIBILITY_CHANGE, FOOTER_VISIBILITY_CHANGE } from '../../actions-types';
import { store } from '../..'

export const changeHeaderVisibility = visibility => {
    store.dispatch({ type: HEADER_VISIBILITY_CHANGE, visibility: visibility })
}

export const changeFooterVisibility = visibility => {
    store.dispatch({ type: FOOTER_VISIBILITY_CHANGE, visibility: visibility })
}