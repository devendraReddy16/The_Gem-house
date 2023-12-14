import { useDarkMode } from "../contexts/DarkmodeContext";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function DarkMode() {
  const { isDarkMode, darkModeToggle } = useDarkMode();

  return (
    <ButtonIcon onClick={darkModeToggle}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkMode;
