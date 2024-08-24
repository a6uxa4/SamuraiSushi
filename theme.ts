"use client";

import { Button, createTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.variant === "") {
          return {
            root: {},
          };
        }
        return { root: {} };
      },
    }),
  },
});
