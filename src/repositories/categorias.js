import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const reposta = await respostaDoServidor.json();
        return reposta;
      }
      throw new Error('Não foi possível pegar os dados :(');
    });
}
export default {
  getAllWithVideos,
};
