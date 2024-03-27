import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './breadcrumb';

const meta = {
  title: 'Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: [
      { name: 'Informações' , isComplete: true},
      { name: 'Pagamento',  isActive: true },
      { name: 'Confirmação da compra' }
    ],
    primaryColor: '#00ffbf'
  }
};
