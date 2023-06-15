import React from 'react'
import { Modal } from '../components/Modal'
import './style.css'

export default {
  title: 'Example/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Modal Button',
  children: 'Modal Text',
};