"use client";

import { Card, Image, Text, Badge, Group, Button } from "@mantine/core";
import classes from "./style.module.css";
import ModalWindow from "../CardModalWindow";
import { useDisclosure } from "@mantine/hooks";
import { IProductContent } from "../../../store/common/product.common";
import { useCart } from "../../../utils/hooks/useCart";
import { MouseEvent } from "react";

const ProductCard: React.FC<IProductContent> = ({ ...rest }) => {
  const [opened, { toggle }] = useDisclosure();

  const { data } = useCart();
  console.log(data);

  const handleAddedProduct = (
    productId: IProductContent,
    event: MouseEvent
  ) => {
    event.stopPropagation();
    // toggleCartItem(productId);
  };

  return (
    <>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        className={classes.cardContainer}
        onClick={toggle}
      >
        <Card.Section>
          <Image src={rest.image} alt={rest.name} className={classes.img} />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500} className={classes.headingTitle}>
            {rest.name}
          </Text>
          <Badge color="pink">{rest.gram}</Badge>
        </Group>

        <Text size="md" color="#5A6A70" className={classes.mainText}>
          {rest.description}
        </Text>

        <div className={classes.priceAndButton}>
          <Text size="lg" fw={700} mt="md">
            {rest.price} руб.
          </Text>
          <Button
            onClick={(event) => handleAddedProduct(rest, event)}
            variant="outline"
            className={classes.toBasketButton}
          >
            {/* {isClient && isInCart(rest.productId)
              ? "Удалить из корзины"
              : "Добавить в корзину"} */}
          </Button>
        </div>
      </Card>
      {/* <ModalWindow opened={opened} onClose={toggle} size="780px" {...rest} /> */}
    </>
  );
};

export default ProductCard;
