import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { theme, mixins, Section, A, P } from '../style';

const HeroContainer = Section.extend`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`;
const Hi = styled.h1`
  color: ${theme.colors.green};
  margin: 0 0 10px 3px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.SFMono};
  font-weight: 400;
`;
const Name = styled.h1`
  font-size: 80px;
  font-weight: 600;
  margin: 0;
`;
const Subtitle = styled.h2`
  font-size: 80px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${theme.colors.slate};
`;
const Blurb = styled.div`
  max-width: 50%;
  max-width: 480px;

  a {
    ${mixins.inlineLink};
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: ${theme.colors.green};
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;

    &:focus {
      outline-color: ${theme.colors.blue};
    }

    &:hover,
    &:active,
    &:focus {
      color: ${theme.colors.green};
    }
    &:after {
      top: -5px;
    }
  }
`;
const EmailLink = A.extend`
  ${mixins.smallButton};
  margin-top: 50px;
`;

class Hero extends Component {
  static propTypes = {
    hero: PropTypes.array.isRequired,
    email: PropTypes.string.isRequired,
  };

  render() {
    const { hero, email } = this.props;
    const { node } = hero[0];

    return (
      <HeroContainer>
        <Hi>{node.frontmatter.title}</Hi>
        <Name>{node.frontmatter.name}.</Name>
        <Subtitle>{node.frontmatter.subtitle}</Subtitle>
        <Blurb>
          <P dangerouslySetInnerHTML={{ __html: node.html }} />
        </Blurb>
        <EmailLink href={`mailto:${email}`} className="git">
          Get In Touch
        </EmailLink>
      </HeroContainer>
    );
  }
}

export default Hero;