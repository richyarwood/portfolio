import React from 'react';
import styled from 'styled-components';
import {
  BsCodeSlash,
  BsCardText,
  BsLightning,
} from 'react-icons/bs';
import { IconContext } from 'react-icons';

const getIcon = (type) => {
  switch (type) {
  case 'project':
    return <BsCodeSlash />;
  case 'post':
    return <BsCardText />;
  case 'quick tip':
    return <BsLightning />;
  default:
    return <BsCodeSlash />;
  }
};

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
  transition: transform ease-in-out 0.2s;
  width: ${({ size }) => size || '40px'};
  z-index: 1;

  &:hover { /* Icon */
    transform: scale(1.1);
    transition: transform ease-in-out 0.5s;
  }

  &:hover + div { /* OverlayIconLabelWrapper */
    border: 1px solid var(--white);
    transition: all ease-in-out 0.5s;
    width: 130px;
  }

  &:hover ~ div #overlay-label { /* Label text */
    opacity: 1;
    transition: all ease-in-out 0.5s;
    width: 130px;
  }

  &:hover ~ div #overlay-label div { /* Label text */
    flex-grow: 1;
    opacity: 1;
    transition: all ease-in-out 0.5s;
  }
`;

const OverlayIconLabelWrapper = styled.div`
  border: 0px;
  border-radius: 25px;
  position: absolute;
  top: 0;
  right: 10px;
  transition: all ease-in-out 0.2s;
  width: 0px;
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
  padding-left: 10px;
  text-transform: uppercase;
  transition: all ease-in-out 0.2s;
  width: 0px;

  & div {
    opacity: 0;
  }
`;

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
