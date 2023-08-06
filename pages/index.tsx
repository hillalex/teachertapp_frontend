import SchoolList from "../components/schoolList";
import {useEffect, useState} from "react";
import {ListSchoolSchema} from "../types/generated";
import {Col, Container, Row} from "react-bootstrap";
import TopNav from "../components/topNav";

import 'bootstrap/dist/css/bootstrap.min.css';
import AddSchool from "../components/addSchool";

function App() {
    const [schools, setSchools] = useState<ListSchoolSchema>([])

    function refreshSchools() {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/school/")
            .then((res) => res.json())
            .then((data) => {
                setSchools(data)
            })
    }

    useEffect(() => {
        refreshSchools()
    }, [])

    return [
        <TopNav></TopNav>,
        <Container>
            <Row>
                <Col>
                    <div className="h1 my-5">All Schools</div>
                    <SchoolList schools={schools} refreshSchools={refreshSchools}/>
                </Col>
            </Row>
            <Row className={"border-top mt-5"}>
                <Col xs={12} sm={6}>
                    <AddSchool refreshSchools={refreshSchools}/>
                </Col>
            </Row>
        </Container>];
}

export default App;
