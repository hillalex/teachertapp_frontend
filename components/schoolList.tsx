import DeleteButton from "./deleteButton";

export default function SchoolList({schools, refreshSchools}) {

    const handleDelete = (event, id) => {
        event.preventDefault();
        fetch(process.env.NEXT_PUBLIC_API_URL + "/school/" + id, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(() => {
                refreshSchools()
            })
    };

    const rows = schools.map(s => <tr key={s.id}>
        <td className={"p-2"}>{s.name}</td>
        <td className={"p-2"}><DeleteButton handleDelete={(e) => handleDelete(e, s.id)}/></td>
    </tr>)
    return <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
    </table>
}
