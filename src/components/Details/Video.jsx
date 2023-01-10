import React from 'react'
import { Button } from 'react-bootstrap'

const Video = ({ video }) => {
  if (!video) return null
  return (
    <div className='d-flex justify-content-center'>
      <Button variant='danger' size='lg' className='mb-2'>
        <a
          href={
            video.site === 'YouTube'
              ? `https://www.youtube.com/watch?v=${video.key}`
              : `https://vimeo.com/${video.key}`
          }
          rel='noreferrer noopener'
          target='_blank'
          className='text-white'
        >
          Watch {video.type}
        </a>
      </Button>
    </div>
  )
}

export default Video
