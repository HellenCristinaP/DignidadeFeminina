function ListaPontosDeColeta({nome, endereco}) {
    return (
        <li>
            <p>
                <strong>{nome}</strong> <br/>
                   {endereco}
            </p>
        </li>
    )
}

export default ListaPontosDeColeta;