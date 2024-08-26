"use client";

import { createTheme } from "@mantine/core";
import { ButtonStyle } from "./components/button";

export const theme = createTheme({
  components: {
    Button: ButtonStyle,
  },
});
