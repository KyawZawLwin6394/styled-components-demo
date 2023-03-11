import styled from "styled-components"
const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: larger;
    font-weight: bold;
`

const Navbar = styled.div`
    padding: 1em;
    display: grid;
    margin: auto;
    grid-template-columns: 1fr 1fr;
    border-bottom: 2px solid black;
`
const Title = styled.a`
    text-decoration: none; //change underline
    color: #212121;
    text-align: center;
    border: 1px solid black;
`

const Menu = styled.ul`
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    text-align: center;
`
const Options = styled.li`
    color: black;
    list-style-type: none; //remove bullets
`
const Links = styled.a `
    text-decoration: none;
    color:#212121;
`

function Abstract () {
    return (
        <Container>
            <Navbar>
                <Title href="#">Frontend Practice</Title>
                <Menu>
                    <Options><Links href="#">Home</Links></Options>
                    <Options><Links href="#">Projects</Links></Options>
                    <Options><Links href="#">FAQ</Links></Options>
                    <Options><Links href="#">NewsLetter</Links></Options>
                    <Options><Links href="#">Contact</Links></Options>
                </Menu>
            </Navbar>
        </Container>
    )
}

export default Abstract;