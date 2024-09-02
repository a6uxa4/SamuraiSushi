import React, { useState } from "react";
import { Card, Image, Text, Badge, Group } from "@mantine/core";
import classes from "./style.module.css";
import { Button as ThemeButton } from "../../../theme/components";
import ModalWindow from "../CardModalWindow";

type ProductCardProps = {
  image: string;
  name: string;
  composition: string;
  weight: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  composition,
  weight,
  price,
}) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => setOpened(true);
  const handleClose = () => setOpened(false);

  return (
    <>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        className={classes.cardContainer}
        onClick={handleOpen}
      >
        <Card.Section>
          <Image
            src={image || "https://shorturl.at/gKTtg"}
            alt={name}
            className={classes.img}
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500} className={classes.headingTitle}>
            {name}
          </Text>
          <Badge color="pink">{weight}</Badge>
        </Group>

        <Text size="md" color="#5A6A70" className={classes.mainText}>
          {composition}
        </Text>

        <div className={classes.priceAndButton}>
          <Text size="lg" fw={700} mt="md">
            {price} руб.
          </Text>
          <ThemeButton variant="outline" className={classes.toBasketButton}>
            Добавить в корзину
          </ThemeButton>
        </div>
      </Card>
      <ModalWindow
        opened={opened}
        onClose={handleClose}
        title={name}
        image={image || "https://shorturl.at/gKTtg"}
        description={composition}
        price={price}
        size="780px"
        weight={weight}
      />
    </>
  );
};

export default ProductCard;
