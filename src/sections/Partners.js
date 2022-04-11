import {Container, Grid} from "@mui/material";

import partner1 from '../assets/svg/partner1.svg'
import partner2 from '../assets/svg/partner2.svg'
import partnerPlug from '../assets/svg/partner-plug.svg'

export const Partners = () => {
    return (
        <section className="partners">
            <h2 className="title">
                Partners
            </h2>
            <Container>
                <Grid container>
                    <Grid item md={3} xs={12}>
                        <div className="partner__img__wrapper">
                            <img src={partner1} alt="partner 1 image" className="partner__img"/>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <div className="partner__img__wrapper">
                            <img src={partner2} alt="partner 2 image" className="partner__img"/>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <div className="partner__img__wrapper">
                            <img src={partnerPlug} alt="partner plug image" className="partner__img"/>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <div className="partner__img__wrapper">
                            <img src={partnerPlug} alt="partner plug image" className="partner__img"/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )

}
