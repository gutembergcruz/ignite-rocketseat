import { RepositoryItem } from './RepositoryItem';
const repositoryName = 'unform2';

const biribiri = {
    name: 'Unform',
    description: 'Descrição',
    link: 'https://www.google.com.br'
}


export function RepositoryList() {
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={biribiri}/>
                <RepositoryItem/>
            </ul>
        </section>
    )
}