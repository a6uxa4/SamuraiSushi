import { Card, Image, Text, Badge, Group, Button } from "@mantine/core";
import classes from "./style.module.css";
import ModalWindow from "../CardModalWindow";
import { useDisclosure } from "@mantine/hooks";
import { IProductContent } from "../../../store/common/product.common";

const ProductCard: React.FC<IProductContent> = ({
  image,
  name,
  description,
  gram,
  price,
  ...rest
}) => {
  const [opened, { toggle }] = useDisclosure();

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
          <Badge color="pink">{gram}</Badge>
        </Group>

        <Text size="md" color="#5A6A70" className={classes.mainText}>
          {description}
        </Text>

        <div className={classes.priceAndButton}>
          <Text size="lg" fw={700} mt="md">
            {price} руб.
          </Text>
          <Button variant="outline" className={classes.toBasketButton}>
            Добавить в корзину
          </Button>
        </div>
      </Card>
      <ModalWindow
        opened={opened}
        onClose={toggle}
        size="780px"
        description={description}
        image={image || "https://shorturl.at/gKTtg"}
        name={name}
        gram={gram}
        price={price}
        {...rest}
      />
    </>
  );
};

export default ProductCard;
