import React from "react";
import { useState } from "react"
import Menu from "../../Layouts/Menu/Menu";

//close the menu when clicked outside of it

function AccountInfo() {

  const [menu, setMenu] = useState(false);

  const handlemenu = () => {
    setMenu(prev => !prev);
  }

  return(
    <div>
      <h3 className="account-loggedin" onClick={handlemenu}>My Account</h3>
      {menu && <Menu />}
    </div>
  )
}

export default AccountInfo

