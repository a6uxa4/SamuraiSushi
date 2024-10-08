"use client";

import {
  ActionIcon,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Popover,
  rem,
  ScrollArea,
  Tabs,
  Text,
} from "@mantine/core";

import classes from "./style.module.css";
const ThemeSwitch = dynamic(() => import("../../components/UI/ThemeSwitch"), {
  ssr: false,
});
import { ArrowDownUp, Search, ShoppingBasket } from "lucide-react";
import dynamic from "next/dynamic";
import { useDisclosure } from "@mantine/hooks";
import { useCart } from "../../utils/hooks/useCart";

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
  "Напитки и десерты",
];

export function HeaderTabs() {
  const [opened, { close, open, toggle }] = useDisclosure(false);
  const { selectedProduct } = useCart();

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
              <Popover.Dropdown w={300} onMouseLeave={close}>
                {selectedProduct.map((item) => (
                  <Flex key={item.productId} mt="sm" gap={5} w={300}>
                    <Image
                      w={70}
                      h={70}
                      radius={10}
                      src={item.image}
                      alt={item.name}
                    />
                    <Text>{item.name}</Text>
                  </Flex>
                ))}
              </Popover.Dropdown>
            </Popover>
          </Group>
        </Flex>
      </Container>
      <Container size="md">
        <Flex align="center" gap={10}>
          <ScrollArea
            w="100%"
            h={rem(38)}
            className={classes.scrollArea}
            scrollbarSize={0}
          >
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
          </ScrollArea>
          <Flex className={classes.divider} gap={10} pl="sm">
            <ActionIcon
              radius="xl"
              className={classes.actionIcon}
              aria-label="filter"
            >
              <ArrowDownUp width={17} height={17} />
            </ActionIcon>
            <ActionIcon
              radius="xl"
              className={classes.actionIcon}
              aria-label="search"
            >
              <Search width={17} height={17} />
            </ActionIcon>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
