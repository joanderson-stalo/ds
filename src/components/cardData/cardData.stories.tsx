import type { Meta, StoryObj } from '@storybook/react';
import { CardData} from './cardData';

const meta = {
  title: 'CardData',
  component: CardData,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Pedidos enviados',
    value: '1.835.902'
  }
};
