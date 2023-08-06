import {Button} from "react-bootstrap";
import {MouseEventHandler} from "react";

export default function DeleteButton({handleDelete}: {handleDelete: MouseEventHandler}) {
    return <Button variant="danger" onClick={handleDelete}>
        <span aria-hidden="true">&times;</span>
    </Button>;
}
