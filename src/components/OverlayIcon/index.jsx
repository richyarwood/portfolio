import React from 'react';
import styled from 'styled-components';
import { BsCodeSlash, BsCardText } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const OverlayIconWrapperStyles = styled.div`
  bottom: ${({ bottom }) => (bottom ? `${bottom}%` : '0px')};
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  right: ${({ right }) => (right ? `${right}%` : '0px')};
  z-index: 300;
`;

const OverlayIconStyles = styled.div`
  align-items: center;
  background-color: var(--white);
  border: 2px solid var(--darkGrey);
  border-radius: 50%;
  box-shadow: 0px 1px 23px 0px rgba(0,0,0,0.75);
  display: flex;
  height: ${({ size }) => size || '40px'};
  justify-content: center;
  min-width: ${({ size }) => size || '40px'};
  position: relative;
  width: ${({ size }) => size || '40px'};
  z-index: 1;

  &:hover ~ div #overlay-label { /* Label */
    max-width: 150px;
    opacity: 1;
    transition: all ease-in-out 0.5s;
  }

  &:hover ~ div #overlay-label div { /* Label text */
    opacity: 1;
    transition: opacity ease-in-out 1s;
  }
`;

const OverlayIconLabelWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const OverlayIconLabelStyles = styled.div`
  align-items: center;
  opacity: 0;
  background-color: var(--darkGrey);
  border-radius: 25px;
  color: var(--white);
  display: flex;
  font-size: var(--sm);
  font-weight: var(--regularFont);
  height: ${({ size }) => (size || '40px')};
  justify-content: center;
  max-width: 0px;
  padding-right: 45px;
  padding-left: 10px;
  position: absolute;
  right: 0;
  text-transform: uppercase;
  top: 0;
  transition: all ease-in-out 0.5s;

  & div {
    opacity: 0;
  }
`;

const getIcon = (type) => {
  switch (type) {
  case 'project':
    return <BsCodeSlash />;
  case 'post':
    return <BsCardText />;
  default:
    return <BsCodeSlash />;
  }
};

const OverlayIcon = ({
  absolute,
  bottom,
  right,
  type = 'project',
  size,
}) => (
  <IconContext.Provider value={{ color: 'var(--darkGrey)', size: '15px' }}>
    <OverlayIconWrapperStyles
      absolute={absolute}
      bottom={bottom}
      right={right}
    >
      <OverlayIconStyles
        type={type}
        size={size}
      >
        {getIcon(type)}
      </OverlayIconStyles>
      <OverlayIconLabelWrapper>
        <OverlayIconLabelStyles id="overlay-label" size={size}>
          <div>{type}</div>
        </OverlayIconLabelStyles>
      </OverlayIconLabelWrapper>
    </OverlayIconWrapperStyles>
  </IconContext.Provider>
);

export default OverlayIcon;
