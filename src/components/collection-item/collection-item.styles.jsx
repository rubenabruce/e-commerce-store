import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemCont = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 500px;
  position: relative;
  align-items: center;

  &:hover {
    .image {
      opacity: 0.8;
    }

    .custom-button {
      display: flex;
      opacity: 0.85;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    height: 300px;
    &:hover {
      .image {
        opacity: unset;
      }

      .custom-button {  
        opacity: unset;
      }
    }
  }
`;

export const ImageCont = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionFooterCont = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
`;

export const CustomButtonCont = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  bottom: 15%;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.7;
    min-width: unset;
    padding: 0 10px; 
  }
`;