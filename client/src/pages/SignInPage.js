import { signInUser } from "../helpers/FetchHelper";
import { Container } from "react-bootstrap";
import SignInComp from "../components/sign-in/SignInComp";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { getMeData } from "../helpers/FetchHelper";

function SignInPage({ set, user }) {
  const history = useHistory();

  return (
    <Container>
      <SignInComp clickHandler={signIn}></SignInComp>
    </Container>
  );

  function signIn(data) {
    signInUser(data, (response) => {
      if (response.token) {
        toast("Welcome " + user.name);
        localStorage.setItem("token", response.token);
        getMeData(response.token, (data) => {
          set(data);
          history.replace("/home");
        });
      } else {
        toast.error("Fail to log in", { position: "top-center" });
      }
    });
  }
}
export default SignInPage;
