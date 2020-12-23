import { HEADER_VISIBILITY_CHANGE, FOOTER_VISIBILITY_CHANGE } from '../../actions-types'

const initialState = {
    showHeader: true,
    showFooter: true
}

const alert = (state = initialState, action) => {
    switch (action.type) {

        case HEADER_VISIBILITY_CHANGE:

            return Object.assign({}, state, {
                showHeader: action.showHeader
            });

        case FOOTER_VISIBILITY_CHANGE:

            return Object.assign({}, state, {
                showFooter: action.showFooter
            });

        default:
            return state;
    }
}

export default alert