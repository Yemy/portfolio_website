import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faInstagram, faTwitter, faTelegram, faYoutube, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <div className="bg-slate-900">
         <div className="p-2.5">
            <h2>Contact Me on</h2>
            <a className="p-2.5" target="_blank" href="https://www.facebook.com/profile.php?id=100008676510573"><FontAwesomeIcon icon={ faFacebook } style={{ color: "#4267B2" }} /></a>
            <a className="p-2.5" target="_blank" href="https://www.instagram.com/yemibold"><FontAwesomeIcon icon={ faInstagram } style={{ color: "#833AB4" }} /></a>
            <a className="p-2.5" target="_blank" href="https://www.twitter.com/yemybold"><FontAwesomeIcon icon={ faTwitter } style={{ color: "#1DA1F2" }} /></a>
            <a className="p-2.5" target="_blank" href="https://www.youtube.com/channel/UCxa31O0v4EtW66JeHWAUQkQ"><FontAwesomeIcon icon={ faYoutube } style={{ color: "#E62117" }} /></a>
            <a className="p-2.5" target="_blank" href="www.linkedin.com/yemanebirhane"><FontAwesomeIcon icon={ faLinkedin } style={{ color: "#OE76A8" }} /></a>
            <a className="p-2.5" target="_blank" href="https://www.tiktok.com/@ybg0405?lang=en"><FontAwesomeIcon icon={ faTiktok } style={{ color: "#EE1D52" }} /></a>
            <a className="p-2.5" target="_blank" href="https://t.me/yemibold"><FontAwesomeIcon icon={ faTelegram } style={{ color: "#57b7d4" }} /></a>
        </div>    
                        <br />
        <div>
            <br />
            <div>
            <strong> &copy; Copyright protected {(new Date().getFullYear())} | Developed @<a href="https://www.adeytech.com" target="_blank">Adey Technologies</a> - by <a href="https://yemi-bold.web.app">Yemi-Bold</a> </strong>
            </div>
        </div>
    </div>
  )
}

export default Footer