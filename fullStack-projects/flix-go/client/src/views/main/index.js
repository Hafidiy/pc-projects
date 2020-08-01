import React, { useState } from 'react'

import Header from '../../components/main-header'
import Slider from '../../components/main-slider'
import Tab1 from '../../components/main-index-tabs/tab1'
import Tab2 from '../../components/main-index-tabs/tab2'
import Tab3 from '../../components/main-index-tabs/tab3'
import Expected from '../../components/main-expected'
import Partners from '../../components/main-partners'
import Footer from '../../components/main-footer'

const Main = () => {
    const [isActive, setIsActive] = useState({a: true})
    const [isDrShow, setIsDrShow] = useState(false)
    const [inputValue, setInputValue] = useState('new releases')

    return(
        <>
            <Header />
            <Slider />
            <section className="content">
              <div className="content__head">
                <div
                  className="container"
                  onClick={() => isDrShow
                    ? setIsDrShow(false) : null}
                >
                  <div className="row">
                    <div className="col-12">
                      {/* content title */}
                      <h2 className="content__title">New items</h2>
                      {/* end content title */}

                      {/* content tabs nav */}
                      <ul className="nav nav-tabs content__tabs">
                        <li className="nav-item">
                          <span
                            onClick={() => setIsActive({a: true})}
                            className={`tmp-nav-link ${isActive.a ? 'tmp-active' : ''}`}
                          >
                            NEW RELEASES
                          </span>
                        </li>

                        <li className="nav-item">
                          <span
                            onClick={() => setIsActive({b: true})}
                            className={`tmp-nav-link ${isActive.b ? 'tmp-active' : ''}`}
                          >
                            MOVIES
                          </span>
                        </li>

                        <li className="nav-item">
                          <span
                            onClick={() => setIsActive({c: true})}
                            className={`tmp-nav-link ${isActive.c ? 'tmp-active' : ''}`}
                          >
                            TV SERIES
                          </span>
                        </li>
                      </ul>
                      {/* end content tabs nav */}

                      {/* content mobile tabs nav */}
                      <div className={`content__mobile-tabs ${isDrShow ? 'show' : ''}`}>
                        <div
                          onClick={() => setIsDrShow(!isDrShow)}
                          className={`content__mobile-tabs-btn dropdown-toggle ${
                          isDrShow ? 'cmtb-show' : ''}`}
                        >
                          <input type="button" value={inputValue} />
                          <div className='tmp-span'>
                            <div className={`dafter ${isDrShow ? 'dafter-show' : ''}`}></div>
                            <div className={`dbefore ${isDrShow ? 'dbefore-show' : ''}`}></div>
                          </div>
                        </div>

                        <div
                          className={`content__mobile-tabs-menu dropdown-menu ${isDrShow ? 'show' : ''
                          }`}
                        >
                          <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                              <span
                                className='tmp-nav-link'
                                onClick={() => {
                                setIsActive({a: true})
                                setIsDrShow(false)
                                setInputValue('new releases')
                                }}
                                style={isActive.a ? {display: 'none'} : null}
                              >
                                NEW RELEASES
                              </span>
                            </li>

                            <li className="nav-item">
                              <span
                                className='tmp-nav-link'
                                onClick={() => {
                                setIsActive({b: true})
                                setIsDrShow(false)
                                setInputValue('movies')
                                }}
                                style={isActive.b ? {display: 'none'} : null}
                              >
                                MOVIES
                              </span>
                            </li>

                            <li className="nav-item">
                              <span
                                className='tmp-nav-link'
                                onClick={() => {
                                setIsActive({c: true})
                                setIsDrShow(false)
                                setInputValue('tv series')
                                }}
                                style={isActive.c ? {display: 'none'} : null}
                              >
                                TV SERIES
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* end content mobile tabs nav */}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="container"
                onClick={() => isDrShow
                  ? setIsDrShow(false) : null}
              >
                {/* content tabs */}
                <div className="tab-content">
                  {isActive.a ? (<Tab1 />) : null}
                  {isActive.b ? (<Tab2 />) : null}
                  {isActive.c ? (<Tab3 />) : null}
                </div>
                {/* end content tabs */}
              </div>
            </section>
            <Expected />
            <Partners />
            <Footer />
      </>
    )
}

export default Main