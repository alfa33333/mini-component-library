import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const colorDisplay = COLORS.gray700;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  

  return ( 
      <Wrapper>
        <p>{displayedValue}</p>
        <select value={value} onChange={onChange}>
          {children}
        </select>
        <Chevron id="chevron-down" size={20} color={colorDisplay} />
      </Wrapper>
  );
};
const Chevron = styled(Icon)`
  display: inline-block;
  &:hover {
      background-color: ${COLORS.black};
  }
`;

const Wrapper = styled.div`
    width: fit-content;
    height: fit-content;
    position: relative;
    background-color: ${COLORS.transparentGray15};
    color: ${colorDisplay};
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    border-radius: 8px;
    border: none;
    padding: 12px 16px; 

    & p{
      position: relative;
      top: -5px;
      user-select: none;
      display: inline-block;
      padding-right: 12px;
    }

    select {
      border: none;
      opacity: 0;
      background-color: ${COLORS.transparentGray15};
      position: absolute;
      top: 12px;
      left: 10px;
      font-size: 1.2rem;
    }

    &:focus-within {
     outline: 2px solid ${COLORS.primary};
    }

    &:hover {
      color: ${COLORS.black};
    }
`;



export default Select;
