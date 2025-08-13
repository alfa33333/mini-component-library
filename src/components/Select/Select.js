import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return ( 
      <Wrapper>
        <p>{displayedValue}</p>
        <select value={value} onChange={onChange}>
          {children}
        </select>
      </Wrapper>
  );
};

const Wrapper = styled.div`
    width: fit-content;
    height: fit-content;
    position: relative;
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    border-radius: 8px;
    border: none;
    padding: 12px 16px; 

    & p{
      user-select: none;
    }

    select {
      opacity: 0;
      background-color: ${COLORS.transparentGray15};
      position: absolute;
      top: 0;
      left: 0;
      font-size: 16px;
    }

    &:focus-within {
     outline: 2px solid ${COLORS.primary};
    }
`;





export default Select;
