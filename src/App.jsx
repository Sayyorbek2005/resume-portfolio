import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './style/StyleComponent';
// import Footer from "./components/footer/Footer";
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import { routes } from './routes/Route';

import { LanguageProvider } from "./context/LanguageContext";


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <LanguageProvider>
      <Header />
      <SideBar />




        <Routes>
        {routes.map((item, index) => {
          const Component = item.Element;
          return (
            <Route
              key={index}
              path={item.path}
              element={<Component />}
              />
              );
              })}
              </Routes>

      </LanguageProvider>


      {/* <Footer /> */}
    </div>
  );
}

export default App;