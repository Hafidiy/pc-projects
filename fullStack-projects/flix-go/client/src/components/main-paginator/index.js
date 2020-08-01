import React, { useState } from 'react'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const pagesCount = 7

const Paginator = props => {
    const [currentPage, setCurrentPage] = useState(1)
    const [showPage, setShowPage] = useState(1)

    const handleChangeShowPage = value => {
        if(value >= 1 && value + 3 <= pagesCount){
            setShowPage(value)
        }
    }

    return(
        <>
            <div className="col-12">
                <ul className="paginator">
                    <li className="paginator__item paginator__item--prev">
                        <p
                            className='paginator__item__a'
                            onClick={() => handleChangeShowPage(showPage - 1)}
                        >
                            <IoIosArrowBack />
                        </p>
                    </li>

                    <li className={`paginator__item ${currentPage === showPage ? 'paginator__item--active' : ''}`}>
                        <p className='paginator__item__a' onClick={() => setCurrentPage(showPage)}>
                            {showPage}
                        </p>
                    </li>
                    <li className={`paginator__item ${currentPage === showPage + 1 ? 'paginator__item--active' : ''}`}>
                        <p className='paginator__item__a' onClick={() => setCurrentPage(showPage + 1)}>
                            {showPage + 1}
                        </p>
                    </li>
                    <li className={`paginator__item ${currentPage === showPage + 2 ? 'paginator__item--active' : ''}`}>
                        <p className='paginator__item__a'  onClick={() => setCurrentPage(showPage + 2)}>
                            {showPage + 2}
                        </p>
                    </li>
                    <li className={`paginator__item ${currentPage === showPage + 3 ? 'paginator__item--active' : ''}`}>
                        <p className='paginator__item__a' onClick={() => setCurrentPage(showPage + 3)}>
                            {showPage + 3}
                        </p>
                    </li>

                    <li className="paginator__item paginator__item--next">
                        <p
                            className='paginator__item__a'
                            onClick={() => handleChangeShowPage(showPage + 1)}
                        >
                            <IoIosArrowForward />
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Paginator