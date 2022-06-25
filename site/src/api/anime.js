import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

async function PostarAnime(nome, sinopse, lancamento){
    const resposta = await api.post('/anime', {
        nome: nome,
        sinopse: sinopse,
        lancamento: lancamento
    })
    return resposta.data;
}

async function RequisitarAnimes(){
    const resposta = await api.get('/consulta')
    return resposta.data;
}

export { PostarAnime, RequisitarAnimes}