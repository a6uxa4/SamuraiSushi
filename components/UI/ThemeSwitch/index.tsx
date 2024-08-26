import {
  Switch,
  useMantineTheme,
  rem,
  useMantineColorScheme,
} from "@mantine/core";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeSwitch() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const sunIcon = (
    <SunIcon
      style={{ width: rem(16), height: rem(16) }}
      strokeWidth={2.5}
      color={theme.colors.yellow[5]}
    />
  );

  const moonIcon = (
    <MoonIcon
      style={{ width: rem(16), height: rem(16) }}
      strokeWidth={2.5}
      color={theme.colors.blue[5]}
    />
  );

  return (
    <Switch
      size="md"
      color={"gray.5"}
      onLabel={sunIcon}
      offLabel={moonIcon}
      onChange={toggleColorScheme}
      checked={colorScheme === "light"}
    />
  );
}
