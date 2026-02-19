import { useRouteError } from "react-router";

const ErrorPath = () => {
  const errObj = useRouteError();
  return (
    <div>
      <h1>OOPSS🚀🚀🚀🚀 path not defined</h1>
      <p>{`Use this error ${JSON.stringify(errObj)}`}</p>
    </div>
  );
};

export default ErrorPath;
