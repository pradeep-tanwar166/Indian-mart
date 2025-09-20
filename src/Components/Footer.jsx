import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className='min-h-72 bg-gray-900 text-white p-5 m-3 grid grid-cols-3'>
     <div className='px-5'>
        <div className='hover:underline cursor-pointer'>Home</div>
        <div className='hover:underline cursor-pointer'>About</div>
        <div className='hover:underline cursor-pointer'>contact us</div>
        <div className='hover:underline cursor-pointer'>Help</div>
        <div className='hover:underline cursor-pointer'>Carrers</div>
     </div>


     <div>
        <div>
            Mail us on 
            : pradeeptanwar166@gmail.com
           <div>Fineworks Techs.</div>
        </div>
     </div>

     <div>
<h1>Socials media</h1>
<div className='flex gap-5 p-5 '>
<div className='cursor-pointer'><YouTubeIcon></YouTubeIcon></div>
<div  className='cursor-pointer'><InstagramIcon></InstagramIcon></div>
<div  className='cursor-pointer'><GitHubIcon></GitHubIcon></div>
<div  className='cursor-pointer'><TwitterIcon></TwitterIcon></div>
<div  className='cursor-pointer'><FacebookIcon></FacebookIcon></div>
</div>
     </div>
    </div>
  )
}

export default Footer