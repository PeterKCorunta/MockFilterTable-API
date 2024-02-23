import React from 'react'

function Picture({load, src, alt}) {
  return (
    <div>
        <img loading={load} src={src} alt={alt} />
    </div>
  )
}

export default Picture

