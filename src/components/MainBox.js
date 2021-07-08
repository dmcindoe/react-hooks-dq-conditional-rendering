import React, {useState} from "react"
import MenuBar from "./MenuBar"
import { Profile, Photos, Cocktails, Pokemon } from "./pages"

function MainBox() {

  const[MenuItem, SetMenuItem] = useState('Profile')


  let componentToDisplay= 
  <div>Just Smile and Wave.</div>

  if (MenuItem === "Profile") {
    componentToDisplay = <Profile />;
  } else if (MenuItem === "Photos") {
    componentToDisplay = <Photos />;
  }
  else if (MenuItem === "Cocktails") {
    componentToDisplay = <Cocktails />;
  }else if (MenuItem === "Pokemon") {
    componentToDisplay = <Pokemon />
  }

  return (
    <div>
      <MenuBar MenuItem={MenuItem} onClick={SetMenuItem}/>
    {componentToDisplay}
    </div>
  );
}

export default MainBox
