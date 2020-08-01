import React from 'react'

import thfor from '../../assets/img/partners/themeforest-light-background.png'
import aujungle from '../../assets/img/partners/audiojungle-light-background.png'
import cocanyon from '../../assets/img/partners/codecanyon-light-background.png'
import phdune from '../../assets/img/partners/photodune-light-background.png'
import acden from '../../assets/img/partners/activeden-light-background.png'
import docean from '../../assets/img/partners/3docean-light-background.png'

const partners = [
    {
        url: 'https://themeforest.net',
        img: thfor
    },
    {
        url: 'https://audiojungle.net',
        img: aujungle
    },
    {
        url: 'https://codecanyon.net',
        img: cocanyon
    },
    {
        url: 'https://photodune.net',
        img: phdune
    },
    {
        url: 'https://graphicriver.net/activeden-graphics',
        img: acden
    },
    {
        url: 'https://3docean.net',
        img: docean
    },
]

const Partners = () => {

  return(
      <>
        {/* partners */}
        <section className="section">
            <div className="container">
                <div className="row">
                    {/* section title */}
                    <div className="col-12">
                        <h2 className="section__title section__title--no-margin">Our Partners</h2>
                    </div>
                    {/* end section title */}

                    {/* section text */}
                    <div className="col-12">
                        <p className="section__text section__text--last-with-margin">
                            It is a long <b>established</b> fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem Ipsum is that
                            it has a more-or-less normal distribution of letters, as opposed to using.
                        </p>
                    </div>
                    {/* end section text */}

                    {partners.map((partner, pIndex) => (
                        <div key={pIndex} className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <a href={partner.url} className="partner" target='_blank'>
                                <img src={partner.img} alt={partner.url} className="partner__img" />
                            </a>
                        </div>    
                    ))}
                </div>
            </div>
        </section>
        {/* end partners */}
    </>
  )
}

export default Partners