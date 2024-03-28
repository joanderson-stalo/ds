import * as S from "./styles";

interface CardDataProps {
  label: string;
  value: string;
}

export function CardData(props: CardDataProps){
  const { label, value } = props;

  return(
    <>
      <S.Container>
          <h4>{label}</h4>
          <span>{value}</span>
      </S.Container>
    </>
  )
}
