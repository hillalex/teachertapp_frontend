import {Button, Form, InputGroup} from "react-bootstrap";
import {EditIcon} from "./editIcon";
import DeleteButton from "./deleteButton";
import {useState} from "react";
import {SchoolSchema} from "../types/generated";

export default function SchoolRow({
                                      school,
                                      handleDelete
                                  }: { school: SchoolSchema, handleDelete: (event: Event, id: number) => void }) {

    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({name: school.name});

    const handleChange = (event) => {
        const {value} = event.target;
        setFormData(() => ({name: value}));
    };
    const handleSave = () => {
        alert("Updating not yet supported!");
    };

    function toggleEditing() {
        setEditing((current) => !current);
        setFormData(() => ({name: school.name}));
    }

    return <tr>
        <td className={"p-2"}><Button variant={"grey"} onClick={toggleEditing}><EditIcon></EditIcon></Button></td>
        <td className={"p-2"}>
            <InputGroup className={editing ? "d-flex" : "d-none"}>
                <Form.Control type="text" onChange={handleChange} value={formData.name}/>
                <Button onClick={handleSave}>Save</Button>
            </InputGroup>
            <span className={editing ? "d-none" : "d-inline"}>{school.name}</span>
        </td>
        <td className={"p-2"}><DeleteButton handleDelete={(e) => handleDelete(e, school.id)}/></td>
    </tr>;
}
