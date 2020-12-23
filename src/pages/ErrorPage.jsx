import { HEADER_VISIBILITY_CHANGE, FOOTER_VISIBILITY_CHANGE } from "../redux/actions-types";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ErrorPage = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('will mount!')
        dispatch({ type: HEADER_VISIBILITY_CHANGE, showHeader: false })
        dispatch({ type: FOOTER_VISIBILITY_CHANGE, showFooter: false })

        return () => {
            console.log('will unmount!')
            dispatch({ type: HEADER_VISIBILITY_CHANGE, showHeader: true })
            dispatch({ type: FOOTER_VISIBILITY_CHANGE, showFooter: true })
        }
    })

    return (
        <div>404</div>
    )
}

export default ErrorPage;