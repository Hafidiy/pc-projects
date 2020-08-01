import React from 'react'

import styles from './index.module.scss'

import { Header } from '../../../components/header'
import { Schedule } from '../../../components/schedule'
import { Announcements } from '../../../components/announcements'
import { MyCourses } from '../../../components/my-courses'
import { SelectCourses } from '../../../components/select-courses';
import { Groups } from '../../../components/groups'
import { Finally } from '../../../components/finally'
import { Info } from '../../../components/info'
import { Messages } from '../../../components/messages'

import { SideList } from '../../../components/side-list/student'

import { Route, Redirect } from 'react-router-dom'

export const Student = props => {

  return (
    <div className={styles.cont}>
      <SideList
        navCont={props.navCont}
        toggleDrawer={props.toggleDrawer}
      />
      <Header toggleDrawer={props.toggleDrawer}/>
      <Redirect to='/student/dashboard/information' />
      <Route path='/student/dashboard/announcements' component={Announcements} />
      <Route path='/student/dashboard/messages' component={Messages} />
      <Route path='/student/dashboard/select-courses' component={SelectCourses} />
      <Route path='/student/dashboard/schedule' component={Schedule} />
      <Route path='/student/dashboard/my-courses' component={MyCourses} />
      <Route path='/student/dashboard/groups' component={Groups} />
      <Route path='/student/dashboard/finally' component={Finally} />
      <Route path='/student/dashboard/information' component={Info} />
    </div>
  )
}