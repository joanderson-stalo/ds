import type { Meta, StoryObj } from '@storybook/react';
import { OrderReceipt } from './orderReceipt';

const meta = {
  title: 'OrderReceipt',
  component: OrderReceipt,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orderNumber: '#123456789',
    primaryColor: '#FFD700',
    onTrackOrder: () => alert('Acompanhar pedido'),
  }
};
