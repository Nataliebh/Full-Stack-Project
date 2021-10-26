//Navigation codes, the child
// links links links

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { tabs } from "../../helpers/tabs";
import { useHistory } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

function NavigationBarComp({ user, setUser }) {
  //distruction נתונים מהאבא, מחלץ את הנתון הזה

  const history = useHistory();

  function logOutUser() {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.clear();
      setUser({});
      history.replace("/sign-in");
    } else return;
  }

  return (
    // הקומפוננטה אומרת מה היא מציירת על המסך
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ background: "#3685b5" }}
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {
              //יוצר תפריט בצורה דינמית, למקרה שמשתמש רשום או לא רשום
              user._id ? (
                <>
                  {/* <Nav.Link as {Link} to="/home">Home</Na.Link> */}
                  {tabs
                    .filter((x) => x.displayForLoggedin)
                    .map((tab, index) => (
                      <Nav.Link key={index} to={tab.href} as={Link}>
                        {tab.icon} {tab.name}
                      </Nav.Link>
                    ))}
                  <Nav.Link onClick={logOutUser}>
                    Log Out <FiLogOut />
                  </Nav.Link>
                </>
              ) : (
                tabs
                  .filter((x) => !x.hideForLoggedout)
                  .map((tab, index) => (
                    <Nav.Link key={index} to={tab.href} as={Link}>
                      {" "}
                      {tab.icon} {tab.name}
                    </Nav.Link>
                  ))
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBarComp;
