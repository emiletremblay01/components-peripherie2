import { ButtonWithArrow } from "./components/ButtonWithArrow";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { PageAccueil } from "./pages/PageAccueil";
import { PageAPropos } from "./pages/PageAPropos";
import { PageBoutique } from "./pages/PageBoutique";
import { PageEditionsPrecedentes } from "./pages/PageEditionsPrecedents";
import { Routes, Route, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col ">
      <div
        role="header"
        className="fixed inset-x-0 bottom-0 z-40 mx-auto mb-2 max-w-xs px-3 sm:hidden "
      >
        <div className="rounded-full bg-white">
          <a href="" className="">
            <ButtonWithArrow text="Commander Peripherie" />
          </a>
        </div>
      </div>
      <div
        id="logo-haut-gauche"
        className="fixed left-3 top-5 hidden w-16 sm:inline"
      >
        <img
          src="images/peripherie_logotype-variable_milieu_noir.png"
          alt="logo"
          className="  -translate-x-1 -rotate-90 pt-2"
        />
        <NavLink
          to="/"
          className="absolute top-0  h-full w-1/3 bg-opacity-0"
        ></NavLink>
        <NavLink
          to="/"
          className="absolute top-0 h-1/3 w-full bg-opacity-0"
        ></NavLink>
      </div>
      <div
        id="logo-bas-droite"
        className="fixed bottom-5 right-3 z-50 hidden w-16 sm:inline"
      >
        <img
          src="images/peripherie_logotype-variable_milieu_noir.png"
          alt="logo"
          className="  -translate-x-1 rotate-90 pb-2"
        />
        <a
          href=""
          className="absolute right-0 top-0  h-full w-1/3 bg-opacity-0"
        ></a>
        <a href="" className="absolute bottom-0  h-1/3 w-full bg-opacity-0"></a>
      </div>

      <Navbar />
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/boutique" element={<PageBoutique />} />
        <Route
          path="/editions-precedentes"
          element={<PageEditionsPrecedentes />}
        />
        <Route path="/a-propos" element={<PageAPropos />} />
      </Routes>

      <Footer />
    </div>
  );
}
