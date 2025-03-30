import "./assets/main.css";

import {createApp, type App} from "vue";
import {createPinia} from "pinia"
import router from "./router/index.ts"
import uiPlugin from "@nuxt/ui/vue-plugin";
import MyApp from "./App.vue";
import Wrapper from "./components/Base/Wrapper.vue";
import {ObjectPlugin} from "@vue/runtime-core";

const myPlugin: ObjectPlugin = {
    install(app: App) {
        app.component("UWrapper", Wrapper);
        console.info("plugin installed")
    }
}

const app = createApp(MyApp);

app.use(uiPlugin);
app.use(myPlugin)
app.use(createPinia())
app.use(router);

app.mount("#app");
