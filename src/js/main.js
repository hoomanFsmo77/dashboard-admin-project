import 'bootstrap';
import '../style/main.scss';
import Alpine from 'alpinejs';
import Sidebar from "./components/Sidebar/Sidebar.js";
///////////////////////////////////////////
window.Alpine = Alpine
Alpine.data('sidebar',Sidebar)
Alpine.start()