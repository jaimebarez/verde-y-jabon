import Typography from "typography"
import funstonTheme from "typography-theme-wordpress-2016"

funstonTheme.baseFontSize = "25"
funstonTheme.bodyColor = "#9984cb"

const typography = new Typography(
  /*     {
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
} */

  funstonTheme
)
export default typography
