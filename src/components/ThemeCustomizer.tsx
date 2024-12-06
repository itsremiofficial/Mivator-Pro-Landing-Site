import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import themeConfig from "../theme.config";
import { toggleColorScheme, toggleTheme } from "../store/themeConfigSlice";
import IconClose from "../components/Icon/IconClose";

type ThemeKeys =
  | "mivatorhotpink"
  | "mivatorblurple"
  | "mivatoraqua"
  | "mivatorpeach"
  | "mivatorcoal"
  | "mivatorred"
  | "mivatoremerald"
  | "mivatorplatinum"
  | "mivatorsilver"
  | "mivatorgold"
  | "pastelblue"
  | "pastelgreen"
  | "pastelpink"
  | "pastelpurple"
  | "pastelyellow"
  | "mivatorpink";

interface Theme {
  name: string;
  color: string;
}

const colorSchemes: Record<ThemeKeys, Theme> = {
  mivatorhotpink: { name: "Hot Pink", color: `var(--mivatorhotpink)` },
  mivatorblurple: { name: "Blurple", color: `var(--mivatorblurple)` },
  mivatoraqua: { name: "Aqua", color: `var(--mivatoraqua)` },
  mivatorpeach: { name: "Peach", color: `var(--mivatorpeach)` },
  mivatorcoal: { name: "Coal", color: `var(--mivatorcoal)` },
  mivatoremerald: { name: "Emerald", color: `var(--mivatoremerald)` },
  mivatorplatinum: { name: "Platinum", color: `var(--mivatorplatinum)` },
  mivatorsilver: { name: "Silver", color: `var(--mivatorsilver)` },
  mivatorgold: { name: "Gold", color: `var(--mivatorgold)` },
  mivatorpink: { name: "Pink", color: `var(--mivatorpink)` },
  mivatorred: { name: "Red", color: `var(--mivatorred)` },
  pastelblue: { name: "Pastel Blue", color: `var(--pastelblue)` },
  pastelgreen: { name: "Pastel Green", color: `var(--pastelgreen)` },
  pastelpink: { name: "Pastel Pink", color: `var(--pastelpink)` },
  pastelpurple: { name: "Pastel Purple", color: `var(--pastelpurple)` },
  pastelyellow: { name: "Pastel Yellow", color: `var(--pastelyellow)` },
};
interface ThemeCustomizerProps {
  className?: string;
}

const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ className }) => {
  const storedTheme = localStorage.getItem("colorScheme")
    ? localStorage.getItem("colorScheme")
    : themeConfig.colorScheme;
  const dispatch = useDispatch();
  const [colorScheme, setColorScheme] = useState(storedTheme);

  const handleThemeChange = (themeKey: ThemeKeys) => {
    if (themeKey === "mivatorsilver") {
      dispatch(toggleTheme("light"));
      setColorScheme(themeKey);
      dispatch(toggleColorScheme(themeKey));
    } else {
      dispatch(toggleTheme("dark"));
      dispatch(toggleColorScheme(themeKey));
      setColorScheme(themeKey);
    }
  };

  const [showCustomizer, setShowCustomizer] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as HTMLDivElement)
    ) {
      setShowCustomizer(false);
    }
  };

  useEffect(() => {
    if (showCustomizer) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCustomizer]);

  return (
    <div>
      <button
        type="button"
        className={`!transition-colors !duration-300 bg-light-300 hover:bg-light-400 border-light-300 hover:border-light-400 border
          dark:border-primary-1000 dark:hover:border-primary-900
          dark:bg-primary-1000 dark:hover:bg-primary-900
          group
          rounded-2xl btn py-3.5 pr-7 flex items-center justify-between gap-2 font-nippo ${className}`}
        onClick={() => setShowCustomizer(!showCustomizer)}
        tabIndex={0}
      >
        <span
          className="w-5 h-5 rounded-full inline-block"
          style={{
            backgroundColor: colorSchemes[storedTheme as ThemeKeys].color,
          }}
        ></span>
        <h3 className="text-light-1000 group-hover:text-secondary text-[14px] tracking-wider leading-none dark:text-primary-700 dark:group-hover:text-primary-600 whitespace-nowrap !transition-colors !duration-300">
          {colorSchemes[storedTheme as ThemeKeys].name}
        </h3>
      </button>

      <nav
        ref={drawerRef}
        className={`${
          showCustomizer && "!right-0"
        } fixed h-screen -right-[450px] top-0 bottom-0 w-full max-w-[360px] transition-[right] duration-300 z-[51] p-1 pb-8 pr-0`}
      >
        <div
          className="absolute top-0 left-0 w-full rounded-t-3xl
            bg-light-400 border-light-400 border-b-light-600 text-secondary
            dark:bg-primary-1100 dark:border-primary/20 dark:border-b-primary/20 dark:text-primary-600
            border-2 text-center font-chaney text-lg py-4 z-[51] m-1 mr-0 font-semibold"
        >
          <span>Theme Preference</span>
          <button
            type="button"
            className="absolute z-[52] top-0 right-0 !transition-colors !duration-300 rounded-full px-4 h-full"
            onClick={() => setShowCustomizer(!showCustomizer)}
          >
            <IconClose
              width={1.5}
              className="text-light-primary cursor-pointer dark:text-primary-800 hover:text-secondary dark:hover:text-primary-700 !transition-colors !duration-300"
            />
          </button>
        </div>
        <div
          className="bg-light-300 dark:bg-primary-1100 border-light-400
          dark:border-white/10 relative perfect-scrollbar !size-full p-4 mt-6 py-12 shadow-[-23px_0_25px_0_rgba(0,0,0,0.1)] dark:shadow-[-43px_0_45px_0_rgba(0,0,0,0.6)] rounded-3xl border-2"
        >
          <div className="flex flex-col gap-4 items-center">
            {Object.keys(colorSchemes).map((themeKey) => {
              const themeObj =
                colorSchemes[themeKey as keyof typeof colorSchemes];
              const isSilver = themeKey === "mivatorsilver";
              const color1 = isSilver
                ? "var(--mivatorsilver-100)"
                : `var(--${themeKey}-1000)`;
              const color2 = isSilver
                ? "var(--mivatorsilver-400)"
                : `var(--${themeKey}-1200)`;
              const color3 = isSilver
                ? "var(--mivatorsilver-600)"
                : `var(--${themeKey}-1100)`;
              const color4 = isSilver
                ? "var(--mivatorsilver-1200)"
                : `var(--${themeKey}-200)`;
              const color5 = isSilver
                ? "var(--mivatorsilver-1000)"
                : `var(--${themeKey}-900)`;
              const color6 = isSilver
                ? "var(--mivatorsilver-1000)"
                : `var(--${themeKey})`;
              const color7 = isSilver
                ? "var(--mivatorsilver-1200)"
                : `var(--${themeKey})`;

              let nameText;
              if (isSilver && storedTheme === "mivatorsilver") {
                nameText = "var(--color-secondary)";
              } else if (
                themeKey === "mivatorcoal" &&
                storedTheme === "mivatorsilver"
              ) {
                nameText = "var(--color-secondary)";
              } else if (!(storedTheme === "mivatorsilver") && isSilver) {
                nameText = `var(--${themeKey}-600)`;
              } else if (document.documentElement?.classList.contains("dark")) {
                nameText = `var(--${themeKey}-700)`;
              } else {
                nameText = `var(--${themeKey}-1100)`;
              }

              return (
                <div
                  className={`w-72 h-52 relative
                    bg-light-500 border-light-100/10
                    dark:bg-primary-1400
                    rounded-3xl cursor-pointer overflow-hidden border-2 animate-border-opacity-animation duration-500 ${
                      storedTheme === themeKey
                        ? `!border-secondary dark:!border-primary border-opacity-100`
                        : ""
                    }`}
                  key={themeObj.name}
                  onClick={() => handleThemeChange(themeKey as ThemeKeys)}
                >
                  <div
                    style={{ backgroundColor: color6 }}
                    className="absolute !size-full opacity-0 hover:opacity-[0.15] transition-opacity duration-300 z-10 left-0 top-0 right-0 bottom-0"
                  ></div>
                  <div className="mockup-window relative overflow-hidden overflow-x-auto flex flex-col w-full rounded-2xl bg-base-300 left-6 top-6">
                    <div
                      className={`mockup-window-toolbar py-2 inline-flex w-full items-center pr-6 rounded-t-lg`}
                      style={{ backgroundColor: color3 }}
                    >
                      <div className="size-3 aspect-square rounded-full ml-3 mr-[0.1rem] bg-red-500"></div>
                      <div className="size-3 aspect-square rounded-full ml-1 mr-[0.1rem] bg-yellow-500"></div>
                      <div className="size-3 aspect-square rounded-full ml-1 mr-3 bg-green-500"></div>
                      <div
                        className="relative mx-6 inline-flex justify-center items-center h-5 w-4/5 text-ellipsis whitespace-nowrap rounded-md font-nippo font-light"
                        style={{ color: color4, backgroundColor: color1 }}
                      >
                        {/* {themeObj.name} */}
                      </div>
                    </div>
                    <div
                      className={`bg-base-200 flex`}
                      style={{ backgroundColor: color1 }}
                    >
                      <div
                        className="w-16 h-36 flex flex-col items-center pt-4 gap-2"
                        style={{ backgroundColor: color2 }}
                      >
                        <div
                          className="w-8 h-4 rounded-[0.2rem]"
                          style={{ backgroundColor: color5, opacity: 1 }}
                        ></div>
                        <div
                          className="w-8 h-4 rounded-[0.2rem]"
                          style={{ backgroundColor: color5, opacity: 0.8 }}
                        ></div>
                        <div
                          className="w-8 h-4 rounded-[0.2rem]"
                          style={{ backgroundColor: color5, opacity: 0.7 }}
                        ></div>
                        <div
                          className="w-8 h-4 rounded-[0.2rem]"
                          style={{ backgroundColor: color5, opacity: 0.5 }}
                        ></div>
                        <div
                          className="w-8 h-4 rounded-[0.2rem]"
                          style={{ backgroundColor: color5, opacity: 0.3 }}
                        ></div>
                      </div>
                      <div
                        className="flex flex-col justify-between p-4 pt-2 text-5xl font-bold font-nippo w-4/5"
                        style={{ color: color7 }}
                      >
                        <span>Aa</span>
                        <div className="flex flex-col gap-2">
                          <div className="w-4/5 inline-flex items-center gap-2">
                            <div
                              className="aspect-square size-5 rounded-full"
                              style={{ backgroundColor: color6 }}
                            ></div>
                            <div
                              className="w-4/5 h-5 rounded-md rounded-tl-none"
                              style={{ backgroundColor: color6 }}
                            ></div>{" "}
                          </div>
                          <div className="w-full inline-flex items-center gap-2">
                            <div
                              className="aspect-square size-5 rounded-full"
                              style={{ backgroundColor: color6, opacity: 0.3 }}
                            ></div>
                            <div
                              className="w-4/5 h-5 rounded-md rounded-tl-none"
                              style={{ backgroundColor: color6, opacity: 0.3 }}
                            ></div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`absolute flex items-center font-nippo text-base border-t-2 bottom-0 left-0 w-full pl-4 py-2 animate-border-opacity-animation duration-500
                      border-t-light-100/10 bg-light-400
                      dark:bg-primary-1400 dark:border-t-light-100/10
                      ${
                        storedTheme === themeKey
                          ? `dark:!border-t-primary !border-t-secondary`
                          : ""
                      } `}
                    style={{
                      color: nameText,
                      boxShadow: "0 -5px 10px -5px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {themeObj.name}
                    <span
                      className={`ml-2 px-2 py-1 rounded-full opacity-0 font-nippo text-xs leading-none
                          text-neu-100 font-medium dark:font-normal
                          dark:text-white dark:bg-primary-900
                          bg-secondary text-light-100 transition-all duration-500 ${
                            storedTheme &&
                            storedTheme === themeKey &&
                            "opacity-100"
                          }`}
                    >
                      Current
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full rounded-b-4xl
            bg-light-400 border-light-500 text-secondary
            dark:bg-primary-1100 dark:border-white/10 dark:border-t-white/5 dark:text-primary-600
            border-2 text-center font-chaney text-lg py-4 z-[52] m-1 mr-0 font-semibold"
        >
          {/* <span>Theme Preference</span> */}
        </div>
      </nav>
    </div>
  );
};

export default ThemeCustomizer;
