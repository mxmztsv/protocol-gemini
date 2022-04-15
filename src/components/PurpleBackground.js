// import bg from '../assets/svg/purple-bg.svg'
import bg from '../assets/img/purple-bg.png'

export const PurpleBackground = ({ y, height }) => {
    return (
        <div className="purple-bg" style={{height: `${height}px`, top: `${y}px`}}>
            <img src={bg} className="purple-bg__img"/>
        </div>
    )
}
