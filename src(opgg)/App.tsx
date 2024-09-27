
import ContainerLayout from "./ContainerLayout";

function App() {
  return (
    <main style={{width: "100vw"}}>
    <section style={{
        padding: "3px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        margin: "0 auto",
        width: "900px",
        maxWidth: "1000px"
    }}>
      <ContainerLayout  />
      </section>
    </main>
  );
}

export default App;
