import { MantineTheme } from "@mantine/core";

interface ButtonProps {
  variant: "outline" | "primary" | "text";
}

export const ButtonStyle = {
  vars: (theme: MantineTheme, props: ButtonProps) => {},
};
