import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

i18n.use(initReactI18next).init({
  resourses: {
    en: {
      translation: {
        welcome: "Welcome to React and react-i18next",
        search: "Search",
      },
    },
    ru: {
      translation: {
        welcome: "Добро пожаловать в Реакт и реакт ай18-некст",
        search: "Поиск",
      },
    },
  },

  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
