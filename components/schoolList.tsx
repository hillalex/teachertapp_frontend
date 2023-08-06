import {ListSchoolSchema} from "../types/generated";

export default function SchoolList({schools}: { schools: ListSchoolSchema }) {
    const rows = schools.map(s => <tr key={s.id}>
        <td>{s.name}</td>
    </tr>)
    return <table>
        <thead>
        <th>Name</th>
        </thead>
        <tbody>{rows}</tbody>
    </table>
}
