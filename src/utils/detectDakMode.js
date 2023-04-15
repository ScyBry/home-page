import BtnDarkMode from "../components/btnDarkMode/BtnDarkMode";

const detectDarkMode = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};
export default detectDarkMode;
