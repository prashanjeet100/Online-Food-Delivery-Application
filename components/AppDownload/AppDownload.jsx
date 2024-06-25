import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div>
      <div className="app-download" id='app-download'>
        <p>Get the faster orders and exclusive deals! Download now and enjoy your favorite meals at your fingertips with our <br /> Hungrela App.</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store}alt="" />
        </div>
      </div>
    </div>
  )
}

export default AppDownload
