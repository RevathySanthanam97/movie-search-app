import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  background-color: #151515;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size:16px;
}
.activeLink{
  color: red;
}
.dummyText{
  LINE-HEIGHT: 40PX;
  MARGIN: 10PX 20px 50PX;
  TEXT-ALIGN: LEFT;
}
a{
  text-decoration:none;
  color: inherit;
}

`;

export const AppContainer = styled.div`
  width: 100%;
  text-align: center;
  max-width: 1500px;
  position: relative;
  margin: 0 auto;
  header {
    background-color: rgba(8, 26, 36, 0.8);
    margin-bottom: 30px;
  }
  &::before {
    content: "";
    position: fixed;
    background-image: url(http://smartwpress.com/lucille4/wp-content/uploads/2017/01/dark-background.jpg);
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: -1;
    background-repeat: no-repeat;
  }
`;

export const Logo = styled.img`
  margin: 30px 0px;
  width: 200px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const FeaturesBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;
export const SortContainer = styled.div`
  width: 20%;
  margin: 0 20px;

  select {
    width: 100%;
    padding: 20px 10px;
    border: 1px solid lightgray;
    background: inherit;
    color: gray;
    font-size: 20px;
  }
`;
export const FavoritesEmpty = styled.div`
  width: 100%;
  margin: 20px 0px;
`;
export const FavoriteEmptyImg = styled.div`
  background-image: url(https://www.usmagazine.com/wp-content/uploads/2019/10/fake-favorite-movie-candy-state-map.jpg);
  background-size: contain;
  height: 500px;
  background-repeat: no-repeat;
  text-align: center;
  background-position: center;
  margin: 50px 0px;
`;
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightgray;
  padding: 20px;
  margin: 0 20px;
  width: 80%;

  input {
    border: none;
    outline: none;
    width: 100%;
    color: inherit;
    background: inherit;
    font-size: 20px;
  }
  &.active {
    color: red;
    i {
      color: red;
    }
  }
  i {
    font-size: 20px;
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 20px;
  width: 100%;
`;

export const MovieCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
`;

export const MovieCardContainer = styled.div`
margin: 20px;
border: 1px solid #d3d3d37a;
padding: 10px 10px 70px;
-webkit-flex: 1 1 300px;
-ms-flex: 1 1 300px;
flex: 1 1 300px;
position: relative;
background: rgba(8,26,36,0.8);
border-radius: 5px;
}

  &:only-child {
    margin: 20px auto;
    max-width: 500px;
  }
  p {
    margin-bottom: 10px;
    text-align: justify;
  }
`;

export const PosterImg = styled.img`
  margin: 10px 0;
`;

export const Buttons = styled.button`
  padding: 10px;
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: inherit;
  border: 1px solid gray;
  outline: 0;
  color: inherit;
  &.active {
    box-shadow: 0px 0px 5px 0px red;
    border: none;
    .fa-heart {
      color: red;
    }
  }
`;

export const PreviewContainer = styled.div`
    background: #091821;
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(100% - 100px);
    height: calc(100vh - 100px);
    margin: 50px;
    box-shadow: 0 0 0 150px #091821;
    .previewDetails{
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      padding: 0px 50px;
      text-align: left;
      align-items: flex-start;
      background-image: url(http://smartwpress.com/lucille4/wp-content/uploads/2017/01/dark-background.jpg);
    }
    h3{
      width: 100%;
      text-align: center;
      font-size: 30px;
    }
    p{
      margin-top: 20px;
    }
    .goBackBtn {
      position: absolute;
      top: 30px;
      left: 30px;
      background: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: -webkit-body;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      font-size: 22px;
      cursor: pointer;
    }
`
