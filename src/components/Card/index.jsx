import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { mq } from '../../utils/presets';
import Tag from '../Tag';

const CardWrapper = styled.div`
  background-color: var(--lightGrey);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: auto;
  margin: var(--md);
  overflow: hidden;
  width: 100%;

  ${mq.phablet} {
    width: 40%;
  }

  ${mq.xl} {
    width: auto;
    max-width: 250px;
  }
`;

const CardImage = styled(Img)`
  height: 150px;
  width: 100%;
`;

const CardTitle = styled.p`
  color: var(--white);
  font-family: var(--condensedFont);
  font-size: 2rem;
  margin-bottom: var(--xs);
`;

const CardDescription = styled.p`
  color: var(--white);
  font-size: 1.4rem;
  font-weight: var(--lightFont);
  font-family: var(--mainFont);
  line-height: 2.5rem;
  margin-bottom: var(--sm);
`;

const CardTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: var(--xs);

  & > div:not(:last-child) {
    margin-right: var(--xxs);
  }
`;

const Card = ({
  description,
  image,
  tags,
  title,
  cardUrl,
}) => (
  <Link
    to={cardUrl}
  >
    <CardWrapper>
      <CardImage
        fluid={image}
        alt={title}
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <div css={`
      padding: var(--md);
    `}
      >
        <CardTitle>
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
        <CardTags>
          {tags.map((tag) => (
            <Tag
              key={tag}
              choice={tag}
            />
          ))}
        </CardTags>
      </div>
    </CardWrapper>
  </Link>
);


export default Card;
