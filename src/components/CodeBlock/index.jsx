import React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

const CodeStyles = styled.div`
  -webkit-overflow-scrolling: touch;
  background-color: rgb(30, 30, 30);
  position: relative;

  & pre[class*='language-'] {
    overflow: auto;
    padding: 3rem;
    border-radius: 5px;
    font-size: var(--sm);
    white-space: pre;
  }

  & pre[class*='language-']::before {
    background: black;
    border-radius: 0 0 0.25rem 0.25rem;
    color: white;
    font-size: var(--sm);
    letter-spacing: 0.025rem;
    padding: 0.1rem 0.5rem;
    position: absolute;
    right: 1rem;
    text-align: right;
    text-transform: uppercase;
    top: 0;
  }

  & pre[class~='language-js']::before {
    content: 'js';
    background: #f7df1e;
    color: black;
  }

  & pre[class~='language-jsx']::before {
    content: 'jsx';
    background: #61dafb;
    color: black;
  }

  & pre[class~='language-html']::before {
    content: 'html';
    background: #15a710;
    color: black;
  }
`;

const CodeBlock = ({ codeString, language }) => (
  <Highlight
    {...defaultProps}
    code={codeString}
    language={language}
    theme={theme}
  >
    {({
      className, style, tokens, getLineProps, getTokenProps,
    }) => (
      <CodeStyles className="gatsby-highlight" data-language={language}>
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      </CodeStyles>
    )}
  </Highlight>
);

export default CodeBlock;
