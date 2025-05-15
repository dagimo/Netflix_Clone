import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css';

function Footer() {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <FacebookOutlinedIcon className='footer_icon' />
          <InstagramIcon className='footer_icon' />
          <YouTubeIcon className='footer_icon' />
        </div>
        <div className='footer_links_container'>
          <div>
            <ul>
              <li><a href="#" className='footer_link'>Audio Description</a></li>
              <li><a href="#" className='footer_link'>Investor Relations</a></li>
              <li><a href="#" className='footer_link'>Legal Notice</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="#" className='footer_link'>Help Center</a></li>
              <li><a href="#" className='footer_link'>Jobs</a></li>
              <li><a href="#" className='footer_link'>Cookie Preferences</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="#" className='footer_link'>Gift Cards</a></li>
              <li><a href="#" className='footer_link'>Terms of Use</a></li>
              <li><a href="#" className='footer_link'>Corporate Information</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="#" className='footer_link'>Media Center</a></li>
              <li><a href="#" className='footer_link'>Contact Us</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="#" className='footer_link'>Service Code</a></li>
              <li className='footer_copyright'>&copy; 1997-2025 Netflix, Inc.</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;