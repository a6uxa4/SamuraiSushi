"use client";

import { createTheme } from "@mantine/core";
import { ButtonStyle } from "./components";

export const theme = createTheme({
  components: {
    Button: ButtonStyle,
  },
});
