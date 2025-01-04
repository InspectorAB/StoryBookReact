// src/components/LeftNavigation.stories.js
import React from 'react';
import LeftNavigation from './LeftNavigation';

export default {
  title: 'LeftNavigation',
  component: LeftNavigation,
};

const Template = (args) => <LeftNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', link: '#' },
    { label: 'About', link: '#' },
    { label: 'Services', link: '#' },
    { label: 'Contact', link: '#' },
  ],
};
