import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RssFeedIcon from '@mui/icons-material/RssFeed';

function Footer() {
  return (
    <div className='you'>
<div className='your'><YouTubeIcon color="action" sx={{ fontSize: 30 }} /></div>
<div className='your'><InstagramIcon color="action"  sx={{ fontSize: 30 }} /></div>
<div className='your'><FacebookIcon color="action" sx={{ fontSize: 30 }} /></div>
<div className='your'><PinterestIcon color="action" sx={{ fontSize: 30 }} /></div>
<div className='your'><RssFeedIcon color="action" sx={{ fontSize: 30 }} /></div>
    </div>
  )
}

export default Footer