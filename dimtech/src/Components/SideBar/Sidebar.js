import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import './style/Sidebar.css'
import Logo2 from '../Logo2';
import { SidebarData } from './SidebarData'

export default function Sidebar() {
  const [open, close] = useState(false)

  return (

    <div className="Container-sidebar">
      <Menu isOpen={open} onStateChange={s => close(s.close)}>
        <div className="container-logo" onClick={close}>
          <Logo2 onClick={close} />
        </div>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <div className="icon-color">{item.icon}</div>
                <span className="title-menu">{item.title}</span>
              </Link>
            </li>
          )
        })}

      </Menu>
    </div>
  );

}








