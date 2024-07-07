import Vue from 'vue'

//Main pages
import App from './views/app.vue'
import store from './components/store';

// icons
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

// css
import 'normalize.css';


const app = new Vue({
    el: '#app',
    store,
    render: h => h(App),
    components: { App },
});