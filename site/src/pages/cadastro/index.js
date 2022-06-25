import { PostarAnime } from '../../api/anime.js';
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [sinopse, setSinopse] = useState('');
    const [lancamento, setLancamento] = useState('');

    async function salvarClick(){
        await PostarAnime(nome, sinopse, lancamento)
        alert('Anime Cadastrado!')
    }
    return (
      <div>
              <div>
                  <h1>
                      Insira as informações
                  </h1>
                  <div>
                      <label>Nome</label>
                      <input value={nome} onChange={e => setNome(e.target.value)}></input>
                        
                      <label>Sinopse</label>
                      <input value={sinopse} onChange={e => setSinopse(e.target.value)}></input>
  
                      <label>Lançamento</label>
                      <input type='date' value={lancamento} onChange={e => setLancamento(e.target.value)}></input>
                  </div>
                  <button onClick={salvarClick}>Salvar</button>
              </div>

              <div>
                <Link to='/consulta'>Consultar animes</Link>
              </div>
          </div>
    );
  }