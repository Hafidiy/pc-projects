import React from 'react'
import { Link } from 'react-router-dom'

const Title = props => {
    
    return(
        <>
            {/* page title */}
            <section className="section section--first section--bg" data-bg="img/section/section.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section__wrap">
                                {/* section title */}
                                <h2 className="section__title">
                                    {props.first ? props.first : props.title}
                                </h2>
                                {/* end section title */}

                                {/* breadcrumb */}
                                <ul className="breadcrumb">
                                    <li className="breadcrumb__item">
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li className="breadcrumb__item breadcrumb__item--active">
                                        {props.title}
                                    </li>
                                </ul>
                                {/* end breadcrumb */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end page title */}
        </>
    )
}

export default Title