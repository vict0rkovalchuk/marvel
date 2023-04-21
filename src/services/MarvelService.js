import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = '5fb08fddb575a55d82219f9e2320f5e7';
  const _baseOffset = 210;
  const _baseComicsOffset = 0;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&apikey=${_apiKey}`
    );

    return res.data.results.map(_transformCharacter);
  };

  const getAllComics = async (offset = _baseComicsOffset) => {
    const res = await request(
      `${_apiBase}comics?limit=8&offset=${offset}&apikey=${_apiKey}`
    );

    return res.data.results.map(_transformComics);
  };

  const getTotalCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&apikey=${_apiKey}`
    );

    return res.data.total;
  };

  const getTotalComics = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}comics?limit=8&offset=${offset}&apikey=${_apiKey}`
    );

    return res.data.total;
  };

  const getCharacter = async id => {
    const res = await request(`${_apiBase}characters/${id}?apikey=${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const _transformCharacter = char => {
    return {
      name: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      id: char.id,
      comics: char.comics.items.slice(0, 10)
    };
  };

  const _transformComics = comics => {
    return {
      name: comics.title,
      price: comics.prices[0].price
        ? comics.prices[0].price + '$'
        : 'NOT AVAILABLE',
      thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
      id: comics.id
    };
  };

  return {
    loading,
    error,
    getTotalCharacters,
    getAllCharacters,
    getTotalComics,
    getCharacter,
    getAllComics,
    clearError
  };
};

export default useMarvelService;
