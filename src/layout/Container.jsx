import React from 'react'

const Container = ({children}) => {
  return (
    <div style={{maxWidth: '1450px', margin: '0 auto'}} className='layout'>{children}</div>
  )
}

export default Container