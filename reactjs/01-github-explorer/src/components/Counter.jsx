import { useState } from "react";

// Imutabilidade

// usuarios = ['User01','User02','User03']
// usuarios.push('User03')     <====Forma sem Imutabilidade

// novoUsuarios = [...usuaruis, 'User03']   <=== Basicamente criando uma nova var com os valores



export function Counter(){
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )

}