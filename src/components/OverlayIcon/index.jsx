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
  height: 30px;
  z-index: 200;

  /* Icon label wrapper */
  @media(hover: hover) {
      &:hover div {
      opacity: 1;
      visibility: visible;
    }
  }

  /* Icon label text */
  @media(hover: hover) {
      &:hover div#icon-label {
      padding-right: 40px;
    }
  }
`;

const OverlayIconStyles = styled.div`
  align-items: center;
  background-color: var(--white);
  border: 2px solid var(--darkGrey);
  border-radius: 50%;
  box-shadow: 0px 1px 23px 0px rgba(0,0,0,0.75);
  display: flex;
  height: ${({ size }) => size || '30px'};
  justify-content: center;
  min-width: ${({ size }) => size || '30px'};
  width: ${({ size }) => size || '30px'};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const OverlayIconLabelStyles = styled.div`
  align-items: center;
  background-color: var(--black);
  border: 1px solid var(--white);
  border-radius: 20px;
  color: white;
  height: ${({ size }) => size || '30px'};
  position: absolute;
  right: 0;
  top: 0;
  text-transform: uppercase;
  width: max-content;
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: all ease-in-out 0.2s;

  & div#icon-label {
    font-size: var(--sm);
    padding-right: 0px;
    padding-left: 10px;
    white-space: nowrap;
    transition: padding-right ease-in-out 0.2s;
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
      <OverlayIconLabelStyles>
        <div id="icon-label">
          {type}
        </div>
      </OverlayIconLabelStyles>
    </OverlayIconWrapperStyles>
  </IconContext.Provider>
);

export default OverlayIcon;
