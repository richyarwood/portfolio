import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import CodeBlock from './src/components/CodeBlock';

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);

    if (props) {
      return <CodeBlock {...props} />;
    }
    return <pre {...preProps} />;
  },
  wrapper: ({ children }) => <>{children}</>,
};

const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

export default wrapRootElement;
