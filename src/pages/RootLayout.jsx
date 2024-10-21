import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <p>
          Esse é o layout principal, Abaixo está o conteúdo dinâmico de cada
          rota
        </p>
        <hr />
      </main>
        <Outlet/>
        <hr />
      <footer>
        <p>Feito com React Router Dom</p>
      </footer>
    </>
  );
}
