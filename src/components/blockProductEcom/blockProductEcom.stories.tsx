import type { Meta, StoryObj } from '@storybook/react';
import { BlockProductEcom} from './blockProductEcom';

const meta = {
  title: 'BlockProductEcom',
  component: BlockProductEcom,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    img: '',
    primaryColor: '',
    price: '',
    model:'',
    addProduct: () => console.log('Adicionado ao carrinho'),
  }
};
