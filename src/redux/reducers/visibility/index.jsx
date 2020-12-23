import { HEADER_VISIBILITY_CHANGE, FOOTER_VISIBILITY_CHANGE } from '../../actions-types'

const initialState = {
    showHeader: true,
    showFooter: true
}

const alert = (state = initialState, action) => {
    switch (action.type) {

        case HEADER_VISIBILITY_CHANGE:
            state.showHeader = action.showHeader;

            return state;

        case FOOTER_VISIBILITY_CHANGE:
            state.showFooter = action.showFooter;

            return state;

        default:
            return state;
    }
}

export default alert