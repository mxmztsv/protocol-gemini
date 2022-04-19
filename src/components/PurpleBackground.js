// import bg from '../assets/svg/purple-bg.svg'
import bg from '../assets/img/purple-bg.png'
import bgMobile from '../assets/img/purple-bg-mobile.png'
import useMediaQuery from "@mui/material/useMediaQuery";

export const PurpleBackground = ({ y, height }) => {

    const isMd = useMediaQuery('(min-width:600px)')


    return (
        <div className="purple-bg" style={{height: `${height}px`, top: `${y}px`}}>
            <img src={ isMd ? bg : bgMobile } className="purple-bg__img"/>
        </div>
    )
}
