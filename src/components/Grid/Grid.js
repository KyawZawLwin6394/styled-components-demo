import styled from "styled-components";

const Container = styled.body` 
    display: grid;
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
`

const Nav = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 3fr 1fr;
    background: #1e212a;
    color:white;
    padding: 0.5em;
    //border-radius: 10px;
    box-shadow: 4px 2px 2px black; //adding box shadow
  `

const Ul = styled.ul`
    padding:0; //fixes sthe white space at the start of the grid
    display: grid;
    grid-template-columns: repeat(4,1fr);
`
const Li = styled.li`
    text-align: center;
    list-style-type: none;
    font-size: medium;
`
const Aherf = styled.a`
    text-decoration: none;
    color: darkgrey;
    display: inline-block;
    position: relative;
    color: darkgrey;

    &:hover {
        color:white; //change text color
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: white;
        transform-origin: bottom right;
        transition: transform 0.5s ease-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`


function NavBar() {
    return (
        <Container>
            <Nav>
                <div>Menu</div>
                <div>Logo</div>
                <div>
                    <Ul>
                        <Li><Aherf href="#">News</Aherf></Li>
                        <Li><Aherf href="#">Game</Aherf></Li>
                        <Li><Aherf href="#">Library</Aherf></Li>
                        <Li><Aherf href="#">Support</Aherf></Li>
                    </Ul>
                </div>
                <div>SearchBar</div>
            </Nav>
        </Container>
    );
}

export default NavBar;
