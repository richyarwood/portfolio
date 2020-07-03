import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { mq } from '../../utils/presets';
import Tag from '../Tag';
import Heading from '../Heading';

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
  display: flex;
  flex-direction: column;
  margin-bottom: var(--lg);
  min-height: 400px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  width: auto;

  :hover {
    transform: scale(1.01);
    box-shadow: 3px 0px 4px 2px rgba(0,0,0,0.2);
  }

  ${mq.tablet} {
    margin : 0 var(--sm) var(--xl) var(--sm);
  }
`;

const CardImage = styled(Img)`
  height: 150px;
  width: 100%;
`;

const CardContent = styled.div`
  padding: var(--md);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardDescription = styled.p`
  color: var(--white);
  font-size: 1.4rem;
  font-weight: var(--lightFont);
  line-height: 2.5rem;
`;

const CardTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: auto;

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
        <CardContent>
          <Heading
            as="h3"
            styledAs="2"
            color="var(--white)"
            moreStyles={{ 'margin-bottom': 'var(--xs)' }}
          >
            {title}
          </Heading>
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
        </CardContent>
      </CardBody>
    </Link>
  </CardWrapper>
);


export default Card;
