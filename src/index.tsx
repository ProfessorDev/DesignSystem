import Button from './components/Button/Button';
import SideNav from './components/SideNav/SideNav';
import SideNavLabel from './components/SideNav/SideNavLabel';
import TopMenu from './components/TopMenu/TopMenu';
import TopMenuItem from './components/TopMenu/TopMenuItem';
import TopMenuDivider from './components/TopMenu/TopMenuDivider';
import Dropdown from './components/Dropdown/Dropdown';
import DropdownList from './components/Dropdown/DropdownList';
import DropdownButton from './components/Dropdown/DropdownButton';
import DropdownItem from './components/Dropdown/DropdownItem';
import DropdownInfo from './components/Dropdown/DropdownInfo';
import DropdownGroup from './components/Dropdown/DropdownGroup';
import DropdownDivider from './components/Dropdown/DropdownDivider';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import BreadcrumbItem from './components/Breadcrumb/BreadcrumbItem';
import Input from "./components/Input/Input";
import Password from "./components/Input/Password";
import twClassNames from './utils/tailwind_extensions/twClassNames';

import useEventHandler from "./hooks/useEventHandler";
import useOutsideClickHandler from "./hooks/useOutsideClickHandler";

const hooks = {
    useEventHandler,
    useOutsideClickHandler,
};

export {
    Button,
    SideNav,
    SideNavLabel,
    TopMenu,
    TopMenuItem,
    TopMenuDivider,
    Dropdown,
    DropdownList,
    DropdownButton,
    DropdownItem,
    DropdownInfo,
    DropdownGroup,
    DropdownDivider,
    Breadcrumb,
    BreadcrumbItem,
    twClassNames,
    Input,
    Password,
    hooks,
}