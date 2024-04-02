import { useRouteError, Link } from "react-router-dom";
import "../sassStyles/components/error.scss";

function Error() {
  const error = useRouteError();

  return (
    <div className="error">
      <h1 className="error__title">{error.status}</h1>
      <p className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
