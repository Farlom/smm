import styled from "styled-components";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import User from "./pages/User";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

function App() {

    const StyledContainer = styled.div`
      margin: 0 auto;
    `

  return (
    <StyledContainer className="App">
        <BrowserRouter>
        <Link to="/">Главная</Link>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </StyledContainer>
  );
}

export default App;
