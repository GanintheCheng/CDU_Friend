import { createSSRApp } from "vue";
import App from "./App.vue";
import '@/style/fonts.scss';
// import '@/style/stylesheet.css';

export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
