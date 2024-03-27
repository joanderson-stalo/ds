import styled from 'styled-components';

export const Container = styled.div<{ primaryColor?: string }>`
  width: 100%;
  max-width: 313px;

  > img {
    width: 100%;
    height: 100%;
    max-width: 312px;
    max-height: 227px;
    object-fit: cover;
  }

  > button {
    width: 100%;
    text-align: center;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid ${props => props.primaryColor};
    color: ${props => props.primaryColor};

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 15.566px;
    text-transform: uppercase;
    padding: 14px 66.5px;
    white-space: nowrap;

    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
  }

  > h3 {
    color: #000;
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`;
