import {useForm} from 'react-hook-form';

import exit from '../assets/svg/exit.svg'

export const JoinUs = ({close}) => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="join-us">
            <div className="join-us__bg" onClick={close}/>
            <div className="join-us__form__container">
                <div className="join-us__form__wrapper">
                    <p className="join-us__title">
                        join us
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="join-us__form">
                        <input className="form__input join-us__form__input"
                               placeholder="Your name" {...register("name", {required: true})} />
                        <input className="form__input join-us__form__input" placeholder="Your email" {...register("email", {
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })} />
                        <input className="form__input join-us__form__input"
                               placeholder="Subject" {...register("subject", {required: true})} />
                        <textarea className="form__input textarea"
                               placeholder="Your message (optional)" {...register("message")} />
                        {/*<button type="submit" className="join-us__form-btn">Join us</button>*/}
                        <div className="join-us__btn__container">
                            <button type="submit" className="btn_invert">Join us</button>
                        </div>
                    </form>
                </div>
                <div className="join-us__form__exit__wrapper" onClick={close}>
                    <div className="join-us__form__exit">
                        <p className="join-us__form__exit__text">
                            EXIT
                        </p>
                        <img src={exit} alt="exit form" className="join-us__form__exit__img"/>
                    </div>
                </div>
            </div>


        </div>
    )
}
