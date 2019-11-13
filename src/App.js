import React from 'react';
import {VerticalContainer} from "./components/general/Generic";
import styled from "styled-components";
import MainPage from "./pages/MainPage";

const Container = styled(VerticalContainer)`
  flex: 1;
  align-items: center;
`;

function App() {
    return (
        <Container>
            <MainPage/>
        </Container>
    );
}

export default App;
