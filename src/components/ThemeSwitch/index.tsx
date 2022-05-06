import { Switch } from "antd";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useLocalStorage } from "../../hook";

export interface AppThemeSwitchProps {
}

export default function AppThemeSwitch(props: AppThemeSwitchProps) {

  const { currentTheme, switcher } = useThemeSwitcher();
  const setDarkMode = useLocalStorage("dark_mode", currentTheme)[1]

  function toggleTheme(isChecked: boolean) {
    setDarkMode(isChecked ? "dark" : "light")
    switcher({ theme: isChecked ? "dark" : "light" });
  };

  return (
    <Switch
      className="AppThemeSwitcher"
      checkedChildren="🌜"
      unCheckedChildren="🌞"
      checked={currentTheme === "dark"}
      onChange={toggleTheme}
    />
  );
}
