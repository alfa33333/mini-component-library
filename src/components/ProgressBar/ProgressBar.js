/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--padding': 0 + "px",
     "--height": 8 + "px",
     "--radius": 4 ,
     "--scale": 1
  },
  medium: {
    '--padding': 0 + 'px',
    "--height": 12 + "px",
    "--radius": 4,
    "--scale": 1
  },
  large: {
    '--padding': 4 + "px",
     "--height": 24 + "px",
     "--radius": 4,
     "--scale": 2
  },
};

const ProgressBar = ({ value, size }) => {
  return <StyledProgressBar id="loadinglabel" max="100" value={value} style={SIZES[size]}></StyledProgressBar>;
};

const StyledProgressBar = styled.progress`
  /* Reset the default appearance */
  -webkit-appearance: none;
  appearance: none;
  --rcorner: ${ props => (props.value-98)*props.style['--radius']/2 + 'px'};

  width: 370px;
  height: var(--height);
  overflow: hidden;

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    padding: var(--padding);
    border-radius: ${props =>  props.style['--radius']*props.style['--scale'] + 'px'};
    box-shadow: 0 2px 4px ${COLORS.transparentGray35} inset;
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: calc(var(--radius)*1px);
    border-bottom-right-radius: var(--rcorner);
    border-top-right-radius: var(--rcorner);
  }
`;

// import React from 'react';
// import styled from 'styled-components';
// import { COLORS } from '../../constants';
// import VisuallyHidden from '../VisuallyHidden';

// const SIZES = {
//   small: {
//     '--height': '8px',
//     '--radius': '4px',
//     '--padding': '0px',
//   },
//   medium: {
//     '--height': '12px',
//     '--radius': '4px',
//     '--padding': '0px',
//   },
//   large: {
//     '--height': '24px',
//     '--radius': '8px',
//     '--padding': '4px',
//   },
// };

// const ProgressBar = ({ value, size }) => {
//   const styles = SIZES[size];

//   return (
//     <Wrapper
//       style={styles}
//       aria-valuenow={value}
//       aria-valuemin="0"
//       aria-valuemax="100"
//       role="progressbar"
//     >
//       <VisuallyHidden>{value}%</VisuallyHidden>
//       <BarWrapper>
//         <Bar
//           style={{
//             '--width': value + '%',
//             '--radius': styles.radius + 'px',
//           }}
//           value={value}
//         />
//       </BarWrapper>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   background: none;
//   box-shadow: 0px 2px 4px ${COLORS.transparentGray35} inset;
//   border-radius: var(--radius);
//   padding: var(--padding);
//   width: 370px;
// `;

// const BarWrapper = styled.div`
//   border-radius: var(--radius);
//   overflow: hidden;
// `;

// const Bar = styled.div`
//   width: var(--width);
//   height: var(--height);
//   background: ${COLORS.primary};
//   border-radius: ${props =>
//     props.value < 100
//       ? 'var(--radius) 0 0 var(--radius)'
//       : 'var(--radius)'};
//   transition: width 0.2s;
// `;

export default ProgressBar;
