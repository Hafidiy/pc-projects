import React, { useState } from 'react'

const sorts = ['Date created', 'Rating', 'Views']

export const TitleCurc = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [sortType, setSortType] = useState(sorts[0])

    return(
        <>
            {/* main title */}
            <div className="col-12">
                <div className="main__title">
                    <h2>{props.title}</h2>

                    <span className="main__title-stat">
                        {`${props.countTotal} Total`}
                    </span>

                    <div className="main__title-wrap">
                        {/* filter sort */}
                        <div className={`admin__filter ${isOpen ? 'show' : ''}`}>
                            <span className="admin__filter__item-label">Sort by:</span>

                            <div
                                className="admin__filter__item-btn"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <input type="button" value={sortType} />
                                <span></span>
                            </div>

                            <ul className={`admin__filter__item-menu ${isOpen
                                ? 'show' : ''}`}
                            >
                                {sorts.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setSortType(sorts[index])
                                            setIsOpen(!isOpen)
                                        }}
                                    >{item}</li>
                                ))}
                            </ul>
                        </div>
                        {/* end filter sort */}

                        {/* search */}
                        <form action="#" className="main__title-form">
                            <input type="text" placeholder={props.placehold} />
                            <button type="button">
                                <i className="icon ion-ios-search"></i>
                            </button>
                        </form>
                        {/* end search */}
                    </div>
                </div>
            </div>
            {/* end main title */}
        </>
    )
}