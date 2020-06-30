import styled from 'styled-components';

export const GalleryStyle = styled.div`
  margin: 10px auto 50px;
  padding-bottom: 48px;
  max-width: 972px;
  min-height: 100vh;
  background-color: rgb(250, 250, 250);

  & .aplayer {
    margin: 1%;
  }
`;

export const ContentWrapper = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
`;

export const CardWrapper = styled.div`
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  padding: 15%;
  width: 0;
  margin: 0.5%;
  position: relative;
  display: inline-block;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  & p {
    position: absolute;
    margin: 0;
    right: 0;
    top: 0;
    width: 40px;
    color: rgb(250, 250, 250);
    font-size: 24px;
    border-radius: 0 0 0 5px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  & .card {
    /* position: relative; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  /* & .card {
    position: relative;
    & img {
      width: 300px;
      height: 300px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      object-fit: contain;
    }

    & p {
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
      color: rgb(250, 250, 250);
      font-size: 24px;
      border-radius: 0 0 0 5px;
      background-color: rgba(0, 0, 0, 0.4);
    }
  } */
`;
