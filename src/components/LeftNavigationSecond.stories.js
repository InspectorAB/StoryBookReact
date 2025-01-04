// src/components/LeftNavigation.stories.js
import React from 'react';
import LeftNavigationSecond from './LeftNavigationSecond';

export default {
  title: 'LeftNavigationSecond',
  component: LeftNavigationSecond,
};

const Template = (args) => <LeftNavigationSecond {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    image: 'https://via.placeholder.com/40',
    name: 'John Smith',
  },
};
