import { createSSRApp } from "vue";
import pinia from './stores'
import App from "./App.vue";
import '@/style/fonts.scss';

// import '@/style/stylesheet.css';

export function createApp() {
  const app = createSSRApp(App)

  app.use(pinia)
  return {
    app,
  }
}
