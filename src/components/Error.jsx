import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <p>Oups! La page que vous demandez n'existe pas.</p>
    </div>
  );
}

export default Error;
