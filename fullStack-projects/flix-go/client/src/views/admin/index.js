import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { SideBar } from '../../components/admin-sidebar'
import { Header } from '../../components/admin-header'

export const Admin = () => {
  const [isOpenHS, setIsOpenHS] = useState(false)

  return(
    <>
      <Header
          isOpen={isOpenHS}
          setIsOpen={() => setIsOpenHS(!isOpenHS)}
      />
      <SideBar isOpen={isOpenHS} dashboard={true} />

      {/* main content */}
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            {/* main title */}
            <div className="col-12">
              <div className="main__title">
                <h2>Dashboard</h2>

                <Link
                  to='/add-item'
                  className="main__title-link"
                >
                  add item
                </Link>
              </div>
            </div>
            {/* end main title */}

            {/* stats */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span>Unique views this month</span>
                <p>5 678</p>
                <i className="icon ion-ios-stats"></i>
              </div>
            </div>
            {/* end stats */}

            {/* stats */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span>Items added this month</span>
                <p>172</p>
                <i className="icon ion-ios-film"></i>
              </div>
            </div>
            {/* end stats */}

            {/* stats */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span>New comments</span>
                <p>2 573</p>
                <i className="icon ion-ios-chatbubbles"></i>
              </div>
            </div>
            {/* end stats */}

            {/* stats */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="stats">
                <span>New reviews</span>
                <p>1 021</p>
                <i className="icon ion-ios-star-half"></i>
              </div>
            </div>
            {/* end stats */}

            {/* dashbox */}
            <div className="col-12 col-xl-6">
              <div className="dashbox">
                <div className="dashbox__title">
                  <h3><i className="icon ion-ios-trophy"></i> Top items</h3>

                  <div className="dashbox__wrap">
                    <Link
                      to='/admin'
                      className="dashbox__refresh"
                    >
                      <i className="icon ion-ios-refresh"></i>
                    </Link>
                    <Link
                      to="/admin-catalog"
                      className="dashbox__more"
                    >
                      View All
                    </Link>
                  </div>
                </div>

                <div className="dashbox__table-wrap">
                  <span>
                    <table className="main__table main__table--dash">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>TITLE</th>
                          <th>CATEGORY</th>
                          <th>RATING</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="main__table-text">321</div>
                          </td>
                          <td>
                            <div className="main__table-text">I Dream in Another Language</div>
                          </td>
                          <td>
                            <div className="main__table-text">Movie</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 9.2</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">54</div>
                          </td>
                          <td>
                            <div className="main__table-text">Benched</div>
                          </td>
                          <td>
                            <div className="main__table-text">Movie</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 9.1</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">670</div>
                          </td>
                          <td>
                            <div className="main__table-text">Whitney</div>
                          </td>
                          <td>
                            <div className="main__table-text">TV Series</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 9.0</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">241</div>
                          </td>
                          <td>
                            <div className="main__table-text">Blindspotting 2</div>
                          </td>
                          <td>
                            <div className="main__table-text">TV Series</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 8.9</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">22</div>
                          </td>
                          <td>
                            <div className="main__table-text">Blindspotting</div>
                          </td>
                          <td>
                            <div className="main__table-text">TV Series</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 8.9</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </span>
                </div>
              </div>
            </div>
            {/* end dashbox */}

            {/* dashbox */}
            <div className="col-12 col-xl-6">
              <div className="dashbox">
                <div className="dashbox__title">
                  <h3><i className="icon ion-ios-film"></i> Latest items</h3>

                  <div className="dashbox__wrap">
                    <Link className="dashbox__refresh" to="/admin">
                      <i className="icon ion-ios-refresh"></i>
                    </Link>
                    <Link
                      to="/admin-catalog"
                      className="dashbox__more"
                    >
                      View All
                    </Link>
                  </div>
                </div>

                <div className="dashbox__table-wrap">
                  <span>
                    <table className="main__table main__table--dash">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>TITLE</th>
                          <th>CATEGORY</th>
                          <th>STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="main__table-text">26</div>
                          </td>
                          <td>
                            <div className="main__table-text">I Dream in Another Language</div>
                          </td>
                          <td>
                            <div className="main__table-text">Movie</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--green">Visible</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">25</div>
                          </td>
                          <td>
                            <div className="main__table-text">Benched</div>
                          </td>
                          <td>
                            <div className="main__table-text">Movie</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--green">Visible</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">24</div>
                          </td>
                          <td>
                            <div className="main__table-text">Whitney</div>
                          </td>
                          <td>
                            <div className="main__table-text">TV Series</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--green">Visible</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">23</div>
                          </td>
                          <td>
                            <div className="main__table-text">Blindspotting 2</div>
                          </td>
                          <td>
                            <div className="main__table-text">TV Series</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--green">Visible</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">22</div>
                          </td>
                          <td>
                            <div className="main__table-text">Blindspotting</div>
                          </td>
                          <td>
                            <div className="main__table-text">TV Series</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--green">Visible</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </span>
                </div>
              </div>
            </div>
            {/* end dashbox */}

            {/* dashbox */}
            <div className="col-12 col-xl-6">
              <div className="dashbox">
                <div className="dashbox__title">
                  <h3><i className="icon ion-ios-contacts"></i> Latest users</h3>

                  <div className="dashbox__wrap">
                    <Link
                      to="/admin"
                      className="dashbox__refresh"
                    >
                      <i className="icon ion-ios-refresh"></i>
                    </Link>
                    <Link
                      className="dashbox__more" to="/admin-users"
                    >
                      View All
                    </Link>
                  </div>
                </div>

                <div className="dashbox__table-wrap">
                  <span>
                    <table className="main__table main__table--dash">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>FULL NAME</th>
                          <th>EMAIL</th>
                          <th>USERNAME</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="main__table-text">23</div>
                          </td>
                          <td>
                            <div className="main__table-text">John Doe</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--grey">email@email.com</div>
                          </td>
                          <td>
                            <div className="main__table-text">Username</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">23</div>
                          </td>
                          <td>
                            <div className="main__table-text">John Doe</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--grey">email@email.com</div>
                          </td>
                          <td>
                            <div className="main__table-text">Username</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">23</div>
                          </td>
                          <td>
                            <div className="main__table-text">John Doe</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--grey">email@email.com</div>
                          </td>
                          <td>
                            <div className="main__table-text">Username</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">23</div>
                          </td>
                          <td>
                            <div className="main__table-text">John Doe</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--grey">email@email.com</div>
                          </td>
                          <td>
                            <div className="main__table-text">Username</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">23</div>
                          </td>
                          <td>
                            <div className="main__table-text">John Doe</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--grey">email@email.com</div>
                          </td>
                          <td>
                            <div className="main__table-text">Username</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </span>
                </div>
              </div>
            </div>
            {/* end dashbox */}

            {/* dashbox */}
            <div className="col-12 col-xl-6">
              <div className="dashbox">
                <div className="dashbox__title">
                  <h3><i className="icon ion-ios-star-half"></i> Latest reviews</h3>

                  <div className="dashbox__wrap">
                    <Link className="dashbox__refresh" to='/admin'>
                      <i className="icon ion-ios-refresh"></i>
                    </Link>
                    <Link className="dashbox__more" to='/admin-reviews'>
                      View All
                    </Link>
                  </div>
                </div>

                <div className="dashbox__table-wrap">
                  <span>
                    <table className="main__table main__table--dash">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>ITEM</th>
                          <th>AUTHOR</th>
                          <th>RATING</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="main__table-text">23</div>
                          </td>
                          <td>
                            <div className="main__table-text">I Dream in Another Language</div>
                          </td>
                          <td>
                            <div className="main__table-text">John Doe</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.2</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">24</div>
                          </td>
                          <td>
                            <div className="main__table-text">Benched</div>
                          </td>
                          <td>
                            <div className="main__table-text">John Doe</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 6.3</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">25</div>
                          </td>
                          <td>
                            <div className="main__table-text">Whitney</div>
                          </td>
                          <td>
                            <div className="main__table-text">John Doe</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 8.4</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">26</div>
                          </td>
                          <td>
                            <div className="main__table-text">Blindspotting</div>
                          </td>
                          <td>
                            <div className="main__table-text">John Doe</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 9.0</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="main__table-text">27</div>
                          </td>
                          <td>
                            <div className="main__table-text">I Dream in Another Language</div>
                          </td>
                          <td>
                            <div className="main__table-text">John Doe</div>
                          </td>
                          <td>
                            <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.7</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </span>
                </div>
              </div>
            </div>
            {/* end dashbox */}
          </div>
        </div>
      </main>
      {/* end main content */}
    </>
  )
}
