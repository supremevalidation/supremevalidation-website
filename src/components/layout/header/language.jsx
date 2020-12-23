import { TRFlag, USAFlag } from "../../svg";
import { useSelector } from "react-redux";
import { languageAction } from "../../../redux/actions";

const Language = () => {
    const language = useSelector(state => state.language)

    const onLanguageClick = () => languageAction.changeLanguage(language === "EN" ? "TR" : "EN")

    return (
        <div className="language-button" onClick={onLanguageClick}>
            {
                language === "EN" ? <TRFlag /> : <USAFlag />
            }
        </div>
    )
}

export default Language;