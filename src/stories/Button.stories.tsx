import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, IButton } from '../components/UI/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

const Template: StoryFn<IButton> = (args) => <Button {...args} />;

export const Create = Template.bind({});

export const Confirm = Template.bind({});

export const Edit = Template.bind({});

Create.args = {
  variant: 'create',
  children: 'Create',
};

Confirm.args = {
  variant: 'confirm',
  children: 'Confirm',
};

Edit.args = {
  variant: 'confirm',
  children: 'Edit',
};
