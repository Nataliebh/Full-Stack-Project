import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SignInPage from "../pages/SignInPage";
import BusinessRegistrationPage from "../pages/BusinessRegistrationPage";
import SimpleRegistrationPage from "../pages/SimpleRegistrationPage";
import MyCardsPage from "../pages/MyCardsPage";
import AllCardsPage from "../pages/AllCardsPage";
import { BiHome } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";

//הלוגיקה של הניווטים, של הנאב-בר
// navbar logic
export const tabs = [
  {
    name: "Home",
    href: "/home",
    page: HomePage,
    displayForLoggedin: true,
    icon: <BiHome />,
  },
  {
    name: "About",
    href: "/about",
    page: AboutPage,
    displayForLoggedin: true,
    icon: <FcAbout />,
  },
  {
    name: "Simple Registration",
    href: "/simple-registration",
    page: SimpleRegistrationPage,
    displayForLoggedin: false,
  },
  {
    name: "Business Registration",
    href: "/business-registration",
    page: BusinessRegistrationPage,
    displayForLoggedin: false,
  },
  {
    name: "My Cards",
    href: "/my-cards",
    page: MyCardsPage,
    displayForLoggedin: true,
    hideForLoggedout: true,
  },
  {
    name: "All Cards",
    href: "/all-cards",
    page: AllCardsPage,
    displayForLoggedin: true,
    hideForLoggedout: true,
  },
  {
    name: "Sign In",
    href: "/sign-in",
    page: SignInPage,
    displayForLoggedin: false,
  },
];
