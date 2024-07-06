import { Container } from "@mui/material";
import "./App.css";

import MainContent from "./component/MainContent";
function App() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "red",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <MainContent />
      </Container>
    </div>
  );
}

export default App;
