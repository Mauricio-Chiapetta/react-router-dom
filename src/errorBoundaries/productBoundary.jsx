import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ProductBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <h2>Ops. . . Produto não encontrado</h2>; // pode criar componentes mais elaborados
      case 401:
        return <h2>Você não está autorizado a entrar nessa página</h2>;
      case 400:
        return <h2>Parece que algo deu errado na requisição</h2>;
      case 500:
        return <h2>Erro no servidor</h2>;
    }
  }
  return <h2>Algo deu errado</h2>
}
