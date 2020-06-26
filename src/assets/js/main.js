import PreLoader from "./modules/preloader";
new PreLoader();

import LandingPage from "./modules/landingPage";
new LandingPage();


import "../css/style.scss";

if (module.hot) {
    module.hot.accept();
}