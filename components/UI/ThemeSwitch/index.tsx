import { Switch, useMantineTheme, rem } from "@mantine/core";
import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeSwitch = () => {
  const theme = useMantineTheme();

  const sunIcon = (
    <SunIcon
      style={{ width: rem(16), height: rem(16) }}
      strokeWidth={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <MoonIcon
      style={{ width: rem(16), height: rem(16) }}
      strokeWidth={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} />
  );
};
