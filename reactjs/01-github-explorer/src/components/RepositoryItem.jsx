export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? "Default"}</strong>
            <p>{props.repository?.description ?? "Tem não"}</p>
            <a href={props.repository?.link ?? "#"}>Acessar Repositório</a>
        </li>
    );
}