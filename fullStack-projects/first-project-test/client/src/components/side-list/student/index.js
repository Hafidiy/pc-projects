import React from 'react'

import styles from './index.module.scss'

import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { FaBell } from "react-icons/fa"
import { MdGroup, MdChat } from 'react-icons/md'
import { FaIdCard } from 'react-icons/fa'
import { MdSchedule } from 'react-icons/md'
import { MdAssignment } from 'react-icons/md'
import { FiCheckSquare } from 'react-icons/fi'
import { AiOutlineSelect } from 'react-icons/ai'

import { Link } from 'react-router-dom'

export const SideList = ({ toggleDrawer, navCont }) => {
  const roles = [
    'Announcements',
    'Messages',
    'Select-courses',
    'Schedule',
    'My-courses',
    'Groups',
    'Finally',
    'Information'
  ]
  const tmp = '/student/dashboard'

  return(
    <Drawer open={navCont} onClose={toggleDrawer(false)}>
      <div
        role="presentation"
        className={styles.list}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <h2 style={{
          fontWeight: 500,
          textAlign: 'center',
          padding: '0.5em 0em'
        }}>
          Student
        </h2>
        <Divider />
        <List>
          <Link to={`${tmp}/announcements`} style={{textDecoration: 'none', color: '#432344'}}>
            <ListItem button>
              <FaBell className={styles.icons} />
              <ListItemText primary={roles[0]} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to={`${tmp}/messages`} style={{textDecoration: 'none', color: '#432344'}}>
            <ListItem button>
              <MdChat className={styles.icons} />
              <ListItemText primary={roles[1]} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to={`${tmp}/select-courses`} style={{textDecoration: 'none', color: '#432344'}}>
            <ListItem button>
              <AiOutlineSelect className={styles.icons} />
              <ListItemText primary={roles[2]} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to={`${tmp}/schedule`} style={{textDecoration: 'none', color: '#432344'}}>
            <ListItem button>
              <MdSchedule className={styles.icons} />
              <ListItemText primary={roles[3]} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to={`${tmp}/my-courses`} style={{textDecoration: 'none', color: '#432344'}}>
            <ListItem button>
              <MdAssignment className={styles.icons} />
              <ListItemText primary={roles[4]} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to={`${tmp}/groups`} style={{textDecoration: 'none', color: '#432344'}}>
            <ListItem button>
              <MdGroup className={styles.icons} />
              <ListItemText primary={roles[5]} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to={`${tmp}/finally`} style={{textDecoration: 'none', color: '#432344'}}>
            <ListItem button>
              <FiCheckSquare className={styles.icons} />
              <ListItemText primary={roles[6]} />
            </ListItem>
          </Link>
        </List>
        <List>
          <Link to={`${tmp}/information`} style={{textDecoration: 'none', color: '#432344'}}>
            <ListItem button>
              <FaIdCard className={styles.icons} />
              <ListItemText primary={roles[7]} />
            </ListItem>
          </Link>
        </List>
      </div>     
    </Drawer>
  )
}