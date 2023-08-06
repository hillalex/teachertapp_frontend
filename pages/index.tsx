import SchoolList from "../components/schoolList";
import {useEffect, useState} from "react";
import {ListSchoolSchema} from "../types/generated";
import {Col, Container, Row} from "react-bootstrap";
import TopNav from "../components/topNav";

import "bootstrap/dist/css/bootstrap.min.css";
import AddSchool from "../components/addSchool";
import {EditIcon} from "../components/editIcon";

function App() {
    const [schools, setSchools] = useState<ListSchoolSchema>([]);

    function refreshSchools() {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/school/")
            .then((res) => res.json())
            .then((data) => {
                setSchools(data);
            });
    }

    useEffect(() => {
        refreshSchools();
    }, []);

    return <><TopNav></TopNav>,
        <Container>
            <Row>
                <Col>
                    <div className="h1 mb-3 mt-5">All Schools</div>
                    <p className={"text-muted mb-4"}>Click the <EditIcon/> to edit</p>
                    <SchoolList schools={schools} refreshSchools={refreshSchools}/>
                </Col>
            </Row>
            <Row className={"border-top mt-5"}>
                <Col xs={12} sm={6}>
                    <AddSchool refreshSchools={refreshSchools}/>
                </Col>
            </Row>
        </Container></>;
}

export default App;
