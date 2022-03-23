const Lista = () => {
    const tarefas = [
        { titulo: "React", tempo: "02:00:00" },
        { titulo: "JavaScript", tempo: "01:00:00" },
        { titulo: "TypeScript", tempo: "03:00:00" },
    ]

    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => {
                    return (
                        <li key={index}>
                            <h3>
                                {tarefa.titulo}
                            </h3>
                            <span>
                                {tarefa.tempo}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Lista;