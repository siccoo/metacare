import * as FiIcons from "react-icons/fi";
import AIcon from "../../assets/Trackpad.svg";
import BIcon from "../../assets/calendar.svg";
import CIcon from "../../assets/time.svg";
import MessageIcon from "../../assets/chat.svg";

export const SidebarData = [
    {
        title: "Admin",
        path: "/",
        icon: <FiIcons.FiUsers />,
        iconClosed: <FiIcons.FiChevronRight />,
        iconOpen: <FiIcons.FiChevronDown />
    },
    {
        title: "Knowledge Base",
        path: "/knowledge",
        icon: <AIcon />,
        iconClosed: <FiIcons.FiChevronRight />,
        iconOpen: <FiIcons.FiChevronDown />
    },
    {
        title: "Train SAM",
        path: "/train",
        icon: <AIcon />,
        iconClosed: <FiIcons.FiChevronRight />,
        iconOpen: <FiIcons.FiChevronDown />
    },
    {
        title: "Agent Inbox",
        path: "/agent",
        icon: <BIcon />,
        iconClosed: <FiIcons.FiChevronRight />,
        iconOpen: <FiIcons.FiChevronDown />
    },
    {
        title: "Help Center",
        path: "/help",
        icon: <CIcon />,
        iconClosed: <FiIcons.FiChevronRight />,
        iconOpen: <FiIcons.FiChevronDown />
    },
    {
        title: "Analytics",
        path: "/analytics",
        icon: <MessageIcon />,
        iconClosed: <FiIcons.FiChevronRight />,
        iconOpen: <FiIcons.FiChevronDown />,

        subSidebarData: [
            {
                title: "Knowledge Base"
            },
            {
                title: "Training SAM"
            },
            {
                title: "Help Center"
            }
        ]
    },
]