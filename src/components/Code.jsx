import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {vscDarkPlus} from "react-syntax-highlighter/dist/esm/styles/prism";
import app from "../App.jsx?raw";
import home from "./Home.jsx?raw";
import navbar from "./Navbar.jsx?raw";
import SubNavbar from "./SubNavbar.jsx?raw";
import Hero from "./Hero.jsx?raw";
import CardSection from "./CardSection.jsx?raw";
import card from "./Card.jsx?raw";
import SignIn from "./SignIn.jsx?raw";
import AccountDropdown from "./AccountDropdown.jsx?raw";
import LanguageDropdown from "./LanguageDropdown.jsx?raw";
import Location from "./Location.jsx?raw";
import AllMenu from "./AllMenu.jsx?raw";
import Mycode from "./Code.jsx?raw";


const Code = () => {

  return (
    <div className="p-4 bg-gray-900 min-h-screen overflow-auto">
      <p className="font-bold text-white text-3xl flex flex-col justify-center items-center">My Amazon Clone Code</p>

      <div className="mt-4 mx-10">
        <h2 className="font-semibold text-sky-500">App.jsx</h2>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {String(app || "")}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4 mx-10">
        <h2 className="font-semibold text-sky-500">Home.jsx</h2>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {String(home || "")}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4 mx-10">
        <h2 className="font-semibold text-sky-500">Navbar.jsx</h2>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {String(navbar || "")}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4 mx-10">
        <h2 className="font-semibold text-sky-500">SubNavbar.jsx</h2>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {String(SubNavbar || "")}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4 mx-10">
        <h2 className="font-semibold text-sky-500">Hero.jsx</h2>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {String(Hero || "")}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4 mx-10">
        <h2 className="font-semibold text-sky-500">CardSection.jsx</h2>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {String(CardSection || "")}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4 mx-10">
        <h2 className="font-semibold text-sky-500">Card.jsx</h2>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {String(card || "")}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4 mx-10">
        <h2 className="font-semibold text-sky-500">SignIn.jsx</h2>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {String(SignIn || "")}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4 mx-10">
        <h2 className="font-semibold text-sky-500">AccountDropdown.jsx</h2>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {String(AccountDropdown || "")}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4 mx-10">
        <h2 className="font-semibold text-sky-500">LanguageDropdown.jsx</h2>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {String(LanguageDropdown || "")}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4 mx-10">
        <h2 className="font-semibold text-sky-500">Location.jsx</h2>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {String(Location || "")}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4 mx-10">
        <h2 className="font-semibold text-sky-500">AllMenu.jsx</h2>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {String(AllMenu || "")}
        </SyntaxHighlighter>
      </div>

      <div className="mt-4 mx-10">
        <h2 className="font-semibold text-sky-500">Code.jsx</h2>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {String(Mycode || "")}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Code;
