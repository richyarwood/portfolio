import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { mq } from '../../utils/presets';
import Tag from '../Tag';

const CardWrapper = styled.div`

  ${mq.tablet} {
  flex-basis: 50%;
  max-width: 50%;
}

  ${mq.xl} {
  flex-basis: 25%;
  max-width: 25%;
  }
`;

const CardBody = styled.div`
  background-color: var(--lightGrey);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: var(--lg);
  width: auto;

  ${mq.tablet} {
    margin : 0 var(--sm) var(--xl) var(--sm);
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
  font-weight: var(--regularFont);
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
  <CardWrapper>
    <Link
      to={cardUrl}
    >
      <CardBody>
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
      </CardBody>
    </Link>
  </CardWrapper>
);


export default Card;
