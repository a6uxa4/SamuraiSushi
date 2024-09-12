"use client";

import { Modal, Text, Image, Button, Group, Badge } from "@mantine/core";
import classes from "./style.module.css";

import { IProductContent } from "../../../store/common/product.common";
import { useCart } from "../../../utils/hooks/useCart";

interface ModalWindowProps extends IProductContent {
  opened: boolean;
  onClose: () => void;
  size: string;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  opened,
  onClose,
  ...rest
}) => {
  const {
    isInCart,
    addBasket,
    totalProductQuantity,
    totalProductPrice,
    deleteBasket,
  } = useCart();

  const handleAddedProduct = () => {
    if (isInCart(rest.productId)) {
      deleteBasket(rest.productId);
    } else {
      addBasket({
        productId: rest.productId,
        quantity: 1,
        price: rest.price,
      });
    }
  };

  const handleIncrement = () => {};
  const handleDecrement = () => {};

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={rest.name}
      centered
      size={rest.size}
    >
      <div className={classes.modalContent}>
        <Image
          src={rest.image}
          alt={rest.name}
          className={classes.modalImage}
        />
        <div className={classes.rightBarData}>
          <Text size="lg" mt="md" className={classes.mainText}>
            {rest.description}
          </Text>

          <Badge size="md" mt="md" className={classes.weightText} color="pink">
            Вес: {rest.gram}
          </Badge>

          <Text className={classes.priceDisplay}>
            {totalProductPrice(rest.productId) || rest.price} руб.
          </Text>

          <div className={classes.lowTwoButtons}>
            <Group className={classes.counterContainer}>
              <Button
                className={classes.counterButton}
                onClick={handleDecrement}
                disabled={totalProductQuantity(rest.productId) === 1}
                variant="text"
              >
                -
              </Button>
              <Text className={classes.counterDisplay}>
                {totalProductQuantity(rest.productId) || 1}
              </Text>
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
              onClick={handleAddedProduct}
            >
              {isInCart(rest.productId)
                ? "Удалить из корзины"
                : "Добавить в корзину"}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWindow;
