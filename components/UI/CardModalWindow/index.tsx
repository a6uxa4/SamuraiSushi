import React, { useState } from "react";
import { Modal, Text, Image, Button, Group, Badge } from "@mantine/core";
import classes from "./style.module.css";

import { IProductContent } from "../../../store/common/product.common";

interface ModalWindowProps extends IProductContent {
  opened: boolean;
  onClose: () => void;
  size: string;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  opened,
  onClose,
  image,
  description,
  price,
  size,
  gram,
  name,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice = price * quantity;

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Text className={classes.modalTitle}>{name}</Text>}
      centered
      size={size}
      className={classes.modal}
    >
      <div className={classes.modalContent}>
        <Image src={image} alt={name} className={classes.modalImage} />
        <div className={classes.rightBarData}>
          <Text size="lg" mt="md" className={classes.mainText}>
            {description}
          </Text>

          <Badge size="md" mt="md" className={classes.weightText} color="pink">
            Вес: {gram}
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
            <Button
              variant="primary"
              className={classes.addToCartButton}
              onClick={() => {
                console.log(`Added ${quantity} items to cart`);
                onClose();
              }}
            >
              Добавить в корзину
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWindow;
