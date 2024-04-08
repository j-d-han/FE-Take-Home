import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occured!</h1>
        <p>Could not find this page</p>
        <Link to="/">Return to Home Page</Link>
      </main>
    </>
  );
};

export default ErrorPage;
