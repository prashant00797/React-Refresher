import { useRouteError } from "react-router";

const ErrorPath = () => {
  const errObj = useRouteError();
  return (
    <div>
      <h1>OOPSS🚀🚀🚀🚀 path not defined</h1>
      <p>1.{errObj.data}</p>
      <p>2.{errObj.error.message}</p>
      <p>3.{errObj.error.stack}</p>
      <p>4.{errObj.internal === true ? "TRUE" : "FALSE"}</p>
      <p>5.{errObj.status}</p>
      <p>6.{errObj.statusText}</p>
    </div>
  );
};

export default ErrorPath;
