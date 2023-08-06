import SchoolList from "../components/schoolList";
import {useEffect, useState} from "react";
import {ListSchoolSchema} from "../types/generated";
import {Col, Container, Row} from "react-bootstrap";
import TopNav from "../components/topNav";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [schools, setSchools] = useState<ListSchoolSchema>([])

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/school/")
            .then((res) => res.json())
            .then((data) => {
                setSchools(data)
            })
    }, [])

    return [
        <TopNav></TopNav>,
        <Container>
            <Row>
                <Col>
                    <SchoolList schools={schools} />
                </Col>
            </Row>
        </Container>];
}

export default App;
