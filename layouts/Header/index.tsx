"use client";

import { Button, Container, Flex, Group, Popover, Tabs } from "@mantine/core";

import classes from "./style.module.css";
const ThemeSwitch = dynamic(() => import("../../components/UI/ThemeSwitch"), {
  ssr: false,
});
import { ShoppingBasket } from "lucide-react";
import dynamic from "next/dynamic";
import { useDisclosure } from "@mantine/hooks";

const tabs = [
  "Наборы",
  "Новые",
  "Роллы и суши",
  "Премиум",
  "Темпура",
  "Запечённые",
  "Соусы",
  "Специи",
  "Комбо",
];

export function HeaderTabs() {
  const [opened, { close, open, toggle }] = useDisclosure(false);

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Flex align="center" justify="space-between">
          LOGO
          <Group>
            <ThemeSwitch />
            <Popover
              width={200}
              position="bottom"
              withArrow
              shadow="md"
              opened={opened}
              offset={0}
            >
              <Popover.Target>
                <Button
                  onMouseEnter={open}
                  variant="primary"
                  onClick={toggle}
                  rightSection={<ShoppingBasket size={16} />}
                >
                  КОРЗИНА
                </Button>
              </Popover.Target>
              <Popover.Dropdown onMouseLeave={close}>HELLO</Popover.Dropdown>
            </Popover>
          </Group>
        </Flex>
      </Container>
      <Container size="md">
        <Tabs
          defaultValue="Наборы"
          variant="outline"
          visibleFrom="sm"
          classNames={{
            root: classes.tabs,
            list: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}
