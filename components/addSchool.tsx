import {Button, Form} from "react-bootstrap";
import {useState} from "react";

export default function AddSchool({refreshSchools}) {

    const [formData, setFormData] = useState({name: ""});

    const handleChange = (event) => {
        const {value} = event.target;
        setFormData(() => ({name: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(process.env.NEXT_PUBLIC_API_URL + "/school/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then(() => {
                refreshSchools();
                setFormData(() => ({name: ""}));
            })
    };

    return <Form onSubmit={handleSubmit}>
        <Form.Group className="my-3" controlId="name">
            <Form.Label>Add a new school</Form.Label>
            <Form.Control type="text" placeholder="Enter name of school"
                          onChange={handleChange} value={formData.name}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Add
        </Button>
    </Form>
}
