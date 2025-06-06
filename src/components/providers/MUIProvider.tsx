"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: "#2563eb", // Tailwind blue-600
      light: "#3b82f6", // Tailwind blue-500
      dark: "#1d4ed8", // Tailwind blue-700
    },
    secondary: {
      main: "#8b5cf6", // Tailwind purple-500
      light: "#a78bfa", // Tailwind purple-400
      dark: "#7c3aed", // Tailwind purple-600
    },
  },
  // You can customize other theme aspects here
});

export function MUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
