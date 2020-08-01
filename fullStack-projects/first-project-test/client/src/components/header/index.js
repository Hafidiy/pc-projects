import React from 'react'

import styles from './index.module.scss'

import { MdMenu } from "react-icons/md"
import { FaUserClock } from "react-icons/fa"
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'

import { Link } from 'react-router-dom'

export const Header = props => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [anchorPt, setAnchorPt] = React.useState(null)

  const handleClick = event => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const handlePtClick = event => setAnchorPt(event.currentTarget)

  const handlePtClose = () => setAnchorPt(null)

  const open1 = Boolean(anchorEl)
  const id1 = open1 ? 'simple-popover' : undefined
  
  const open2 = Boolean(anchorPt)
  const id2 = open2 ? 'simple-popover' : undefined

  return(
    <div className={styles.cont}>
      <MdMenu
        className={styles.menuIcon}
        onClick={props.toggleDrawer(true)}
      />

      <div className={styles.right}>
        <Badge badgeContent={2} className={styles.badges} color='error'>
          <FaUserClock
            color="primary"
            variant="contained"
            aria-describedby={id1}
            onClick={handleClick}
            className={styles.bellIcon}
          />
        </Badge>
        <Popover
          id={id1}
          open={open1}
          anchorEl={anchorEl}
          onClose={handleClose}
          className={styles.popover}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={styles.deadline}>
            Subject: Modern Economy, <br/>
            Deadline: 20-03-2020 23:59:59
          </Typography>
          <Typography className={styles.deadline}>
            Subject: Algorithm Design, <br/>
            Deadline: 23-03-2020 23:59:59
          </Typography>
        </Popover>

        <Avatar
          alt='avatar'
          aria-describedby={id2}
          onClick={handlePtClick}
          className={styles.avatar}
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCTCYZy_ysETlSp_sdu7GdUbLET8Odu3PLWOy0aTd2G8ct-RvLA&s'
        />

        <Popover
          id={id2}
          open={open2}
          anchorEl={anchorPt}
          onClose={handlePtClose}
          className={styles.popover}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <p className={styles.ptools}>
            Change Settings
          </p>
          <p className={styles.ptools}>
            <Link
              to='/login'
              style={{textDecoration: 'none', color: '#432344'}}
            >
              Log Out
            </Link>
          </p>
        </Popover>
      </div>
    </div>
  )
}