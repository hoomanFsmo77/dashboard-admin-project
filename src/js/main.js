import 'bootstrap';
import '../style/main.scss';
import Alpine from 'alpinejs';
import Sidebar from "./components/Sidebar/Sidebar.js";
import Dropdown from "./components/Dropdown/Dropdown.js";
///////////////////////////////////////////
window.Alpine = Alpine
Alpine.data('sidebar',Sidebar)
Alpine.data('dropdown',Dropdown)
Alpine.start()