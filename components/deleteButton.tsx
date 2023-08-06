import {Button} from "react-bootstrap";

export default function DeleteButton({handleDelete}) {
    return <Button variant="danger" onClick={handleDelete}>
        <span aria-hidden="true">&times;</span>
    </Button>
}