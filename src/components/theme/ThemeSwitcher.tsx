import { useThemeStore } from '../../features/theme/store/useThemeStore'

function ThemeSwitcher() {
  const {
    theme,
    setTheme,
  } = useThemeStore()

  return (
    <select
      value={theme}
      onChange={(e) =>
        setTheme(
          e.target.value as
            | 'dark'
            | 'industrial'
        )
      }
      className="
        rounded-xl border border-border
        bg-card px-4 py-2
        text-sm outline-none
      "
    >
      <option value="dark">
        Dark Theme
      </option>

      <option value="industrial">
        Industrial Theme
      </option>
    </select>
  )
}

export default ThemeSwitcher