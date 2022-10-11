import React from 'react'
import ChatArea from './ChatArea'
import App_Modal from './App_Modal'

import { styles } from './Styles/Chit_Chat_Area.module.css'

const Chit_Chat_Area = ({socket}) => {
  return (
    <div>
        <App_Modal socket={socket}/>
        <ChatArea socket={socket}/>
    </div>
  )
}

export default Chit_Chat_Area