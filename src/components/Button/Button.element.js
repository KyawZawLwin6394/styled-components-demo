import styled from "styled-components";

export const Wrapper = styled.section`
  border: 2px solid black;
  width: 100%;
  height: 100%;
  font-family: "Open Sans", sans-serif;
  background: #092756;
  background: -moz-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -moz-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
            42,
            60,
            87,
            0.4
          )
          100%),
    -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -o-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -o-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -ms-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -ms-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    linear-gradient(
      to bottom,
      rgba(57, 173, 219, 0.25) 0%,
      rgba(42, 60, 87, 0.4) 100%
    ),
    linear-gradient(135deg, #670d10 0%, #092756 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) =>
    props.variant === "primary"
      ? "palevioletred"
      : "white"}; //adapting styles based on props
  color: ${(props) =>
    props.variant === "primary" ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
  }
`;

export const FancyButton = styled(Button)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none; //This also overrides the original value
`;

export const Title = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.5em")};
  text-align: center;
  color: white;
`;

export const SubmitButton = styled(Button).attrs({
  type: "submit",
})`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props) =>
      props.variant === "sub" ? "#FFF" : "#palevioletred"};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const Grid = styled.div`
  border: 3px solid red;
`;

export const Row = styled.div`
  display: flex;
  border: 2px solid black;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  height: ${(props) => props.height};
  border: 1px solid green;
  padding: none;
`;
export const LoginFormWrapper = styled(Wrapper)`
  padding: none;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  padding: 10px;
  font-size: 13px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2), 0 1px 1px;
  &:hover {
    color: #333333;
    text-decoration: none;
    background-color: #e6e6e6;
    background-position: 0 -15px;
    -webkit-transition: background-position 0.1s linear;
    -moz-transition: background-position 0.1s linear;
    -ms-transition: background-position 0.1s linear;
    -o-transition: background-position 0.1s linear;
    transition: background-position 0.1s linear;
  }
`;
