import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
// @ts-ignore
Primary.decorators = [StoreDecorator({})];

export const WithError = Template.bind({});
WithError.args = {};
// @ts-ignore
WithError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];

export const Loading = Template.bind({});
Loading.args = {};
// @ts-ignore
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
