import React, { useState, useContext, useEffect, useReducer } from 'react';
import { Modal } from '../UI/Modal';
import { CartItem } from './CartItem';
import { styled } from 'styled-components';
import { TotalAmount } from './TotalAmount';
import { Button } from '../UI/Button';
import { CartContext } from '../../store/cart-context';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        addedMeals: state.addedMeals.map((meal) =>
          meal.id === action.mealId
            ? { ...meal, amount: meal.amount + 1 }
            : meal
        ),
      };
    case 'DECREMENT':
      return {
        ...state,
        addedMeals: state.addedMeals.map((meal) =>
          meal.id === action.mealId
            ? { ...meal, amount: meal.amount > 0 ? meal.amount - 1 : 0 }
            : meal
        ),
      };
    default:
      return state;
  }
};

export const Cart = ({ onClose }) => {
  const { addedMeals } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);

  const [cartState, dispatch] = useReducer(cartReducer, { addedMeals });

  useEffect(() => {
    const newTotalAmount = cartState.addedMeals.reduce((acc, meal) => {
      return acc + meal.price * meal.amount;
    }, 0);
    setTotalAmount(newTotalAmount);
  }, [cartState.addedMeals]);

  return (
    <Modal onClose={onClose}>
      <Content>
        <CartList>
          {cartState.addedMeals.map((meal) => (
            <CartItem
              title={meal.title}
              amount={meal.amount}
              price={meal.price}
              key={meal.id}
              onPlus={() => dispatch({ type: 'INCREMENT', mealId: meal.id })}
              onMinus={() => dispatch({ type: 'DECREMENT', mealId: meal.id })}
            />
          ))}
        </CartList>
        <TotalAmount totalAmount={totalAmount} />
        <ActionsContainer>
          <Button variant='outlined' onClick={onClose}>
            Close
          </Button>
          <Button onClick={() => alert("Заказ принят! Мы постараемся отправить его вам как можно скорее. Следите за обновлениями нашего магазина, чтобы не пропустить акции и скидки. Приятного аппетита!")}>Order</Button>
        </ActionsContainer>
      </Content>
    </Modal>
  );
};

const ActionsContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 24px;
`;

const Content = styled('div')`
  padding: 1.5rem 1rem;
`;

const CartList = styled('ul')`
  list-style: none;
  display: flex;
  flex-direction: column;
  max-height: 360px;
  overflow-y: scroll;
`;
