import React, { useState } from "react";
import { Modal, Text, Image, Button, Group, Badge } from "@mantine/core";
import classes from "./style.module.css";
import { Button as ThemeButton } from "../../../theme/components";

type ModalWindowProps = {
  opened: boolean;
  onClose: () => void;
  title: string;
  image: string;
  description: string;
  price: number;
  size: string;
  weight: string;
};

const ModalWindow: React.FC<ModalWindowProps> = ({
  opened,
  onClose,
  title,
  image,
  description,
  price,
  size,
  weight,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice = price * quantity;

  return (
    <Modal opened={opened} onClose={onClose} title={title} centered size={size}>
      <div className={classes.modalContent}>
        <Image src={image} alt={title} className={classes.modalImage} />
        <div className={classes.rightBarData}>
          <Text size="lg" mt="md" className={classes.mainText}>
            {description}
          </Text>

          <Badge size="md" mt="md" className={classes.weightText} color="pink">
            Вес: {weight}
          </Badge>

          <Text className={classes.priceDisplay}>{totalPrice} руб.</Text>

          <div className={classes.lowTwoButtons}>
            <Group className={classes.counterContainer}>
              <Button
                className={classes.counterButton}
                onClick={handleDecrement}
                disabled={quantity === 1}
                variant="text"
              >
                -
              </Button>
              <Text className={classes.counterDisplay}>{quantity}</Text>
              <Button
                variant="text"
                className={classes.counterButton}
                onClick={handleIncrement}
              >
                +
              </Button>
            </Group>
            <ThemeButton
              variant="primary"
              className={classes.addToCartButton}
              onClick={() => {
                console.log(`Added ${quantity} items to cart`);
                onClose();
              }}
            >
              Добавить в корзину
            </ThemeButton>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWindow;
