import { create } from "zustand";

export const useThemeToggleStore = create((set) => {
  const saved = window.localStorage.getItem('mode');
  const isDarkInitial = saved === 'darkMode';

  return {
    isDark: isDarkInitial,
    toggleTheme: () =>
      set((state) => {
        const newMode = !state.isDark;
        window.localStorage.setItem('mode', newMode ? 'darkMode' : 'lightMode');
        return { isDark: newMode };
      }),
  };
});