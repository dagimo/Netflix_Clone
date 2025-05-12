import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css'

function Footer() {
  return (
    <>
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <FacebookOutlinedIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
        </div>
        <div>
          <div>
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
          </ul>
          </div>
          <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cockie Preferences</li>
          </ul>

          </div>


          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Inforamtion</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Pricacy</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>Service Cdoe</li>
            <li>&copy; 1997-2024 Netflix Inc.</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer