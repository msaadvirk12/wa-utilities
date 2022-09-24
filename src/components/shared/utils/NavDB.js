import { FaBriefcase, FaUsersCog, FaChartPie, FaRoad, FaUserTie} from "react-icons/fa";


export const navLinks = [
    { 
        id: 1, 
        title: "Jobs", 
        path: '/', 
        icon: <FaBriefcase className="nav-icon" />
    },
    { 
        id: 2, 
        title: "Audit Log", 
        path: '/audit', icon: 
        <FaUsersCog className="nav-icon" />
    },
    { 
        id: 3, 
        title: "Reports", 
        path: '/reports', 
        icon: <FaChartPie className="nav-icon" />
    },
    { 
        id: 4, 
        title: "Contractors", 
        path: '/contractors', 
        icon: <FaRoad className="nav-icon" />
    },
    { 
        id: 5, 
        title: "Workers", 
        path: '/workers', 
        icon: <FaUserTie className="nav-icon" />
    },
  ];