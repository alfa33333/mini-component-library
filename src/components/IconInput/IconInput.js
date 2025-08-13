import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZE = {
  small: {
    "--height": 24,
    "--indent": 32,
    "--font-size": 14,
  },
  large: {
    "--height": 36,
    "--indent": 48,
    "--font-size": 18,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  return <Wrapper >
    <VisuallyHidden>
      <label >{label}</label>
    </VisuallyHidden>
    <StyledInput width={width} placeholder={placeholder} style={SIZE[size]}/>
    <PlaceIcon id={icon} size={SIZE[size]["--height"]} />
  </Wrapper>;
};

const PlaceIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  color: ${COLORS.gray500};
  pointer-events: none;
`;

const StyledInput = styled.input`
  width: ${props => props.width + 'px'};
  height: calc(var(--height)*1px);  
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  font-size: calc(var(--font-size)*1px);
  font-weight: 700;
  text-indent: calc(var(--indent)*1px);
  color: ${COLORS.gray700};
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  align-items: center;
  &:hover{
    ${StyledInput}, ${PlaceIcon} {
      color: ${COLORS.black};
    }
  }
`;

export default IconInput;
