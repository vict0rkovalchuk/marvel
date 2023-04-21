import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import useMarvelService from '../../services/MarvelService';

import './comicsList.scss';

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [comicsEnded, setComicsEnded] = useState(false);

  const { loading, error, getTotalComics, getAllComics } = useMarvelService();

  useEffect(() => {
    updateComicsList();
  }, []);

  const onRequest = offset => {
    setNewItemLoading(true);
    getAllComics(offset).then(onComicsListLoaded);
  };

  const onComicsListLoaded = async newComicsList => {
    let totalComics = await getTotalComics();
    let ended = false;
    if (totalComics - 8 <= offset) {
      ended = true;
    }

    setComicsList(characters => [...characters, ...newComicsList]);
    setNewItemLoading(false);
    setOffset(offset => offset + 8);
    setComicsEnded(ended);
  };

  const updateComicsList = () => {
    getAllComics()
      .then(onComicsListLoaded)
      .catch(() => setComicsEnded(true));
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="comics__list">
      {errorMessage}
      {spinner}
      <View comicsList={comicsList} />
      <button
        style={{ display: comicsEnded ? 'none' : 'block' }}
        disabled={newItemLoading}
        onClick={() => {
          onRequest(offset);
        }}
        className="button button__main button__long"
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

const View = ({ comicsList }) => {
  const comicsItems = comicsList.map(({ name, thumbnail, price, id }, i) => {
    return (
      <li key={i} className="comics__item">
        <a href="#">
          <img src={thumbnail} alt={name} className="comics__item-img" />
          <div className="comics__item-name">{name}</div>
          <div className="comics__item-price">{price}</div>
        </a>
      </li>
    );
  });

  return <ul className="comics__grid">{comicsItems}</ul>;
};

export default ComicsList;
