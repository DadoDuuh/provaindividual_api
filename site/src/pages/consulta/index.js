import { useEffect, useState } from "react";
import { RequisitarAnimes } from "../../api/anime.js"
import { Link } from "react-router-dom";


export default function Consulta(){
    const [animes, setAnimes] = useState([]);

    async function carregarAnimes(){
        const x = await RequisitarAnimes();
        setAnimes(x);
    }
    useEffect(() => {
        carregarAnimes();
    },[]);

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>SINOPSE</th>
                        <th>LANÇAMENTO</th>
                    </tr>
                </thead>
                <tbody>
            {animes.map(item => 
                <tr>
                    <td>
                        {item.id_anime}
                    </td>
                    <td>
                        {item.nm_nome}
                    </td>
                    <td>
                        {item.ds_sinopse}
                    </td>
                    <td>
                        {item.dt_lancamento.substr(0,10 )}
                    </td>
                </tr>
                )}
                </tbody>
            </table>
                <div>
                    <Link to='/'>Cadastrar Novo</Link>
                </div>
        </div>
    )
}