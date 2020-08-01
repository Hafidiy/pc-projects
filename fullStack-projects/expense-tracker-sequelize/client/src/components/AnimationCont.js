import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const AnimationCont = () => {
  const { loading } = useContext(GlobalContext)

  return (
    <div className={!loading ? 'dn' : 'animBox'}>
      <div className='abox1'>
        <div className='abox2'>
          <div className='abox3'></div>
        </div>
      </div>
    </div>
  )
}
