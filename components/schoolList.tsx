import SchoolRow from "./schoolRow";
import {SchoolSchema} from "../types/generated";

export default function SchoolList({schools, refreshSchools}: {schools: SchoolSchema, refreshSchools: () => void}) {

    const handleDelete = (event: Event, id: number) => {
        event.preventDefault();
        fetch(process.env.NEXT_PUBLIC_API_URL + "/school/" + id, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(() => {
                refreshSchools();
            });
    };

    const rows = schools.map(s => <SchoolRow key={s.id} school={s} handleDelete={handleDelete}/>);
    return <table>
        <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
    </table>;
}
