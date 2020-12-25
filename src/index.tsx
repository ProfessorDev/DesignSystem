/**
 * Design System V1 Components
 */

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
import twClassNames from './utils/tailwind_extensions/twClassNames';

import useEventHandler from "./hooks/useEventHandler";
import useOutsideClickHandler from "./hooks/useOutsideClickHandler";


/**
 * Design System V2 Components
 */
import { Button } from "./components/Button/Button";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { FileSelector } from "./components/FileSelector/FileSelector";
import { File } from "./components/Files/File";
import { PercentageBar } from "./components/PercentageBar/PercentageBar";
import { PercentageCircle } from "./components/PercentageCircle/PercentageCircle";
import { ProgressIndicator } from "./components/ProgressIndicator/ProgressIndicator";
import { Radio } from "./components/Radio/Radio";
import { SearchField } from "./components/SearchField/SearchField";
import { Select } from "./components/Select/Select";
import { Item } from '@react-stately/collections';
import { StatusLight } from "./components/StatusLight/StatusLight";
import { Switch } from "./components/Switch/Switch";
import { Tag } from "./components/Tag/Tag";
import { TextArea } from "./components/TextArea/TextArea";
import { TextField } from "./components/TextField/TextField";

const hooks = {
    useEventHandler,
    useOutsideClickHandler,
};

export {
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
    hooks,

    /**
     * Design System V2 exports
     */
    Button,
    Checkbox,
    FileSelector,
    File,
    PercentageBar,
    PercentageCircle,
    ProgressIndicator,
    Radio,
    SearchField,
    Select,
    Item,
    StatusLight,
    Switch,
    Tag,
    TextArea,
    TextField,
}