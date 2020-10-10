import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Tag from '../Tag';
import Heading from '../Heading';
import Date from '../Date';
import OverlayIcon from '../OverlayIcon';

const CardBody = styled.div`
  background-color: var(--lightGrey);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-height: 450px;
  overflow: hidden;
  width: auto;
`;

const CardImageWrapper = styled.div`
  position: relative;
`;

const CardImage = styled(Img)`
  height: 150px;
  width: 100%;
`;

const CardContent = styled.div`
  padding: var(--md);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardDescription = styled.p`
  font-size: 1.6rem;
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
  date,
  type,
}) => (
  <div>
    <Link to={cardUrl}>
      <CardBody>
        <CardImageWrapper>
          <CardImage
            alt={title}
            fluid={image}
            objectFit="cover"
            objectPosition="50% 50%"
          />
          <OverlayIcon
            absolute
            bottom={5}
            right={5}
            size="30px"
            type={type}
          />
        </CardImageWrapper>
        <CardContent>
          <Date date={date} />
          <Heading
            as="h3"
            moreStyles={{ 'margin-bottom': 'var(--xs)' }}
          >
            {title}
          </Heading>
          <CardDescription>
            {description}
          </CardDescription>
          <CardTags>
            {tags && tags.map((tag) => <Tag key={tag} choice={tag} />)}
          </CardTags>
        </CardContent>
      </CardBody>
    </Link>
  </div>
);

export default Card;
