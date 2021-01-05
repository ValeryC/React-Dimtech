import React, { useEffect } from 'react'
import Sidebar from '../Sidebar'
export default function Portfolio() {

  useEffect(() => {
    document.title = 'Portfolio'
  })
  return (
    <div className="Container-portfolio">
      <Sidebar />
    </div>
  )
}
