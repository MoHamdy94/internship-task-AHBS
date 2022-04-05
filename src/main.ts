// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.


import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// import library from '@fortawesome/fontawesome-svg-core'
// import fas from '@fortawesome/free-solid-svg-icons'
// library.add(fas),
// createApp.component('FontAwesome', FontAwesomeIcon);

// Globally register the component
createApp(App).use(store).use(router).mount("#app");
