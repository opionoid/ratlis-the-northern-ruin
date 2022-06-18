import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ScriptTest, ScriptTestProps } from './index';
import MOCK_SCRIPT_TEST_PROPS from './mock';

export default {
  title: 'components/test/ScriptTest',
  component: ScriptTest,
} as Meta;

const Template: Story<ScriptTestProps> = (args) => <ScriptTest {...args} />
export const Default = Template.bind({})
Default.args = {
  ...MOCK_SCRIPT_TEST_PROPS
}