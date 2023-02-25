import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

interface SideBarIconProps {
  icon: React.ReactNode;
  text?: string;
}

const SideBar = (): JSX.Element => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} text="home 🏚️" />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} text="Send message"/>
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text="Curiosities 💡"/>
      <SideBarIcon icon={<FaPoo size="20" />} text="random facts"/>
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} text="Config"/>
    </div>
  );
};

const SideBarIcon = ({ icon, text }: SideBarIconProps): JSX.Element => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = (): JSX.Element => <hr className="sidebar-hr" />;

export default SideBar;
