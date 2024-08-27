"use client";

import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
  useMantineTheme,
  MantineTheme,
} from "@mantine/core";
import React from "react";

interface CustomButtonProps extends MantineButtonProps {
  variant: "outline" | "primary" | "text";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export const ButtonStyle = {
  vars: (theme: MantineTheme, props: CustomButtonProps) => {
    const isDisabled = props.disabled || props["data-disabled"];

    const baseStyle = {
      root: {
        backgroundColor: isDisabled ? theme.colors.gray[4] : "inherit",
        color: isDisabled ? theme.colors.gray[6] : "inherit",
        border: "none",
        borderRadius: 20,
        cursor: isDisabled ? "not-allowed" : "pointer",
        fontSize: "0.8rem",
        padding: "0.5rem 1rem",
        "&:hover": {
          backgroundColor: isDisabled ? theme.colors.gray[4] : "inherit",
        },
      },
    };

    switch (props.variant) {
      case "primary":
        return {
          ...baseStyle,
          root: {
            ...baseStyle.root,
            backgroundColor: isDisabled
              ? theme.colors.gray[4]
              : theme.colors.red[6],
            color: isDisabled ? theme.colors.gray[6] : theme.white,
            "&:hover": {
              backgroundColor: isDisabled
                ? theme.colors.gray[4]
                : theme.colors.red[7],
            },
          },
        };
      case "outline":
        return {
          ...baseStyle,
          root: {
            ...baseStyle.root,
            backgroundColor: isDisabled ? theme.colors.gray[4] : "transparent",
            color: isDisabled ? theme.colors.gray[6] : theme.colors.red[6],
            border: isDisabled
              ? `1px solid ${theme.colors.gray[6]}`
              : `1px solid ${theme.colors.red[6]}`,
            "&:hover": {
              backgroundColor: isDisabled
                ? theme.colors.gray[4]
                : theme.colors.red[0],
            },
          },
        };
      case "text":
        return {
          ...baseStyle,
          root: {
            ...baseStyle.root,
            backgroundColor: "transparent",
            color: isDisabled ? theme.colors.gray[6] : theme.colors.red[6],
            border: "none",
            "&:hover": {
              backgroundColor: isDisabled ? "transparent" : theme.colors.red[0],
            },
          },
        };
      default:
        return baseStyle;
    }
  },
};

export const Button: React.FC<CustomButtonProps> = (props) => {
  const theme = useMantineTheme();
  const styles = ButtonStyle.vars(theme, props);

  return <MantineButton styles={styles} {...props} />;
};
