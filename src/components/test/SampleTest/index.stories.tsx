import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SampleTest, SampleTestProps } from './index';
import MOCK_SAMPLE_TEST_PROPS from './mock';

export default {
  title: 'components/test/SampleTest',
  component: SampleTest,
} as Meta;

const Template: Story<SampleTestProps> = (args) => <SampleTest {...args} />
export const Default = Template.bind({})
Default.args = {
  ...MOCK_SAMPLE_TEST_PROPS
}