import 'bootstrap';
import '../style/main.scss';
import '../images/user.jpg';
import '../images/user_1.jpg'
import '../images/user_2.jpg';
import '../images/user_3.jpg'
import Alpine from 'alpinejs';
import Sidebar from "./components/Sidebar/Sidebar.js";
import Dropdown from "./components/Dropdown/Dropdown.js";
import PureCounter from "@srexi/purecounterjs";
import Chart from "./components/Chart/Chart.js";
import PieChart from "./components/Chart/pieChart.js";
///////////////////////////////////////////
window.Alpine = Alpine
Alpine.data('sidebar',Sidebar)
Alpine.data('dropdown',Dropdown)
Alpine.start()
const pure = new PureCounter();
am4core.ready(Chart(),PieChart())
