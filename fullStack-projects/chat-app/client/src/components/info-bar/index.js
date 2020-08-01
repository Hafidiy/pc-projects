import './index.css'

import React from 'react'

import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'

const InfoBar = ({ room }) => {
  return(
    <div className='infoBar'>
      <div className='leftInnerContainer'>
        <img
          alt='no space'
          src={onlineIcon}
          className='onlineIcon'
        />
        <h3>{room}</h3>
      </div>
      <div className='rightInnerContainer'>
        <a href='/'>
          <img
            alt='no space'
            src={closeIcon}
          />
        </a>
      </div>
    </div>
  )
}

export default InfoBar