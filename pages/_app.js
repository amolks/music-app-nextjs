import "@/styles/globals.css";

import { AuthProvider } from "./context/AuthContext";
import Navigation from "../components/Navigation";
import store from "../Store/store";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Navigation />
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}
