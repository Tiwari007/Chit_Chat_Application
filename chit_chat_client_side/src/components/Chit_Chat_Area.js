import React from 'react'
import ChatArea from './ChatArea'
// import Modal from './Modal'

import { styles } from './Styles/Chit_Chat_Area.module.css'

const Chit_Chat_Area = ({socket}) => {
  return (
    <div>
        {/* <Modal /> */}
        <ChatArea socket={socket}/>
    </div>
  )
}

export default Chit_Chat_Area