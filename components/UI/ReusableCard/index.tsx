import { Card, Image, Text, Badge, Group } from "@mantine/core";
import classes from "./style.module.css";
import { Button } from "../../../theme/components";

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
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={classes.cardContainer}
    >
      <Card.Section>
        <Image
          src={image || "https://shorturl.at/gKTtg"}
          alt={name}
          className={classes.img}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{name}</Text>
        <Badge color="pink">{weight}</Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {composition}
      </Text>

      <Text size="lg" fw={700} mt="md">
        {price} руб.
      </Text>

      <Button variant="outline">Добавить в корзину</Button>
    </Card>
  );
};

export default ProductCard;
