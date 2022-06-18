const { makeMockPropsName } = require("../utils");

module.exports = (componentName, dirName) => `import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ${componentName}, ${componentName}Props } from './index';
import ${makeMockPropsName(componentName)} from './mock';

export default {
  title: 'components/${dirName}/${componentName}',
  component: ${componentName},
} as Meta;

const Template: Story<${componentName}Props> = (args) => <${componentName} {...args} />
export const Default = Template.bind({})
Default.args = {
  ...${makeMockPropsName(componentName)}
}`;
