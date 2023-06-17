import React from 'react'
import { Avatar } from '@mui/material'
import './ChannelRow.css'
import VerifiedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import Subscriptions from '@mui/icons-material/Subscriptions'

export default function ChannelRow({
    image,
    channel,
    subs,
    noOfVideos,
    description,
    verified
}) {
  return (
    <div className='channelRow'>
    <Avatar className='channelRow__logo' alt={channel} src={image}
    />
    <div className="channelRow__text">
        <h4>{channel} {verified && <VerifiedIcon/>}</h4>
        <p>{subs} subscribers * {noOfVideos} videos</p>
        <p>{description}</p>
    </div>
    </div>
  )
}
