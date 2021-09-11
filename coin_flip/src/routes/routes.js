import Login from '../login/Login.svelte';
import Home from '../home/Home.svelte';
import CoinFlip from '../coin/Flip.svelte';
import FlipHistory from '../coin/FlipHistory.svelte';


const routes = [
  {
    name: "/",
    component: Home,
  },
  {
    name: "/home",
    component: Home,
  },
  {
    name: "/login",
    component: Login,
  },
  {
    name: "/fliphistory",
    component: FlipHistory,
  },
  {
    name: "/coinflip",
    component: CoinFlip,
  },
];

export { routes };