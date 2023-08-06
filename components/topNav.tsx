import {Container, Navbar} from "react-bootstrap";

export default function TopNav() {
    return (
        <Navbar className="bg-body-tertiary mb-3">
            <Container>
                <Navbar.Brand href="#home">TeacherTapp Demo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    );
}
