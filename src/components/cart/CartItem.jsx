import React from 'react';
import { styled } from 'styled-components';
import { IconButton } from '../UI/IconButton';
import { MinusIcon, PlusIcon } from '../../assets';

export const CartItem = ({ title, price, amount, onPlus, onMinus }) => {
  const totalItemPrice = price * amount;

  return (
    <ListItem>
      <Content>
        <h2>{title}</h2>
        <PriceContainer>
          <span className='price'>${totalItemPrice}</span>
          <span className='amount'>x{amount}</span>
        </PriceContainer>
      </Content>
      <ActionsContainer>
        <IconButton Icon={MinusIcon} onClick={onMinus} />
        <IconButton Icon={PlusIcon} onClick={onPlus} />
      </ActionsContainer>
    </ListItem>
  );
};

const ActionsContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const PriceContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 3rem;
  & > .price {
    color: #ad5502;
    font-size: 18px;
    font-weight: 600;
  }
  & > .amount {
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    padding: 6px 14px;
    color: #222222;
    font-weight: 500;
  }
`;

const Content = styled('div')`
  & h2 {
    color: #222222;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

const ListItem = styled('li')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid #d6d6d6;
  &:first-of-type {
    padding-top: 0;
  }
`;
