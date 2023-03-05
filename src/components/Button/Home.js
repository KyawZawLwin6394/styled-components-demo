import {
  Wrapper,
  Title,
  Button,
  FancyButton,
  SubmitButton,
  Row,
  Col,
  Grid,
  Input,
  LoginFormWrapper
} from "./Button.element";

const handleClick = () => {
  console.log(`Hello World`);
};

const handleClickByName = (name) => {
  console.log(`Hello ${name}`);
};

function Home() {
  return (
    <div className="App">
      <Grid>
        <Wrapper>
          <Row>
            <Col size="1">
              <Row>
                <Col size="1">Sidebar</Col>
                <Col size="3">
                  <Title fontSize='1em'>CSS Demo</Title>
                </Col>
                <Col size="8">Search Bar</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col size="2">
              <Title>Buttons</Title>
              <Button variant="primary" onClick={handleClick}>
                Click Me!
              </Button>
              <Button
                onClick={() => {
                  handleClickByName("Kyaw Zaw Lwin");
                }}
              >
                What's My Name!
              </Button>
              <FancyButton
                as="a"
                onClick={() => {
                  alert("Button Clicked!");
                }}
              >
                Alert Button!
              </FancyButton>
              {/* This will render as an anchor tag */}
              <SubmitButton variant="sub">Submit Button</SubmitButton>
            </Col>
            <Col size="1" height='100%'>
                <form method="post">
                  <Title>Login</Title>
                  <Input
                    type="text"
                    placeholder="Username"
                    required="required"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    required="required"
                  />
                  <Button
                    type="submit"
                    class="btn btn-primary btn-block btn-large"
                  >
                    Let me in.
                  </Button>
                </form>
            </Col>
          </Row>
        </Wrapper>
      </Grid>
    </div>
  );
}

export default Home;
