import "./index.css";
import { Link } from "react-router-dom";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import  LightModeIcon  from '@mui/icons-material/LightMode';

const Sidebar = ({lightIsOn}) => {
  return (
    <aside id="sidebar">
      <LightModeIcon className={`light-icon ${lightIsOn ? "color-yellow" : ""}`}/>
    
      <AccountBoxIcon />
      {/* <button>Login/Create</button> */}
      <Link to="/">
        <button>LightSwitch</button>
      </Link>
      <Link to="/new">
        <button>New Book</button>
      </Link>
      <Link to="/library">
        <button>View Books</button>
      </Link>
    </aside>
  );
};

export default Sidebar;
