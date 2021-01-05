import React, { useEffect } from 'react';
import Sidebar from '../Sidebar'

export default function Otherservices() {
  useEffect(() => {
    document.title = 'Other Services'
  })
  return (
    <div className="Container-otherservices">
      <Sidebar />
    </div>
  )
}
