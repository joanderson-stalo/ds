import * as S from './styled';

interface TypeTags {
  img: string;
  primaryColor: string;
  price: number | string; 
  model: string;
  addProduct: () => void;
}

export function BlockProductEcom({ img, primaryColor, price, addProduct, model }: TypeTags) {

  const priceNumber = typeof price === 'string' ? parseFloat(price) : price;
  const formattedPrice = priceNumber.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <S.Container primaryColor={primaryColor}>
      <img src={img} alt="" />
      <S.Content>
        <p>{model}</p>
        <h3>R$ {formattedPrice}</h3>
      </S.Content>
      <button onClick={addProduct} type='button'>Adicionar ao carrinho</button>
    </S.Container>
  );
}
