import styled from 'styled-components';

export const CollectionPreviewCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleCont = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const PreviewCont = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;