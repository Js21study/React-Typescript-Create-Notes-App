import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { IInput, Input } from '../components/UI/Input';

const meta: Meta = {
  title: 'Input',
  component: Input,
};

export default meta;

const Template: StoryFn<IInput> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});

export const DateInput = Template.bind({});

TextInput.args = {
  variant: 'input',
  type: 'text',
};

DateInput.args = {
  variant: 'date',
  type: 'date',
};
