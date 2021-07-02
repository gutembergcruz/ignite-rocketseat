import { useEffect, useState } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

//https://api.github.com/users/Gutemberg234/repos

const biribiri = {
    name: 'Unform',
    description: 'Descrição',
    link: 'https://www.google.com.br'
}

export function RepositoryList() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Gutemberg234/repos')
        .then(response => response.json())
        .then(data => setRepos(data))
    }, [])
    
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