import React from 'react';
import GlobalStyles from '../src/utils/GlobalStyles';

const StoryWrapper = (storyFn) => (
  <>
  <GlobalStyles />
  {storyFn()}
  </>
);

export default StoryWrapper;
