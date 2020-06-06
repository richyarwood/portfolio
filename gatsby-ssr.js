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

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <MDXProvider
    components={components}
  >
    {element}
  </MDXProvider>
);
