import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import MarvelService from '../../services/MarvelService';

import './charList.scss';

const CharList = ({ onCharSelected }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charEnded, setCharEnded] = useState(false);

  const marvelService = new MarvelService();

  useEffect(() => {
    updateCharacters();
  }, []);

  const onRequest = offset => {
    onCharListLoading();
    marvelService
      .getAllCharacters(offset)
      .then(onCharactersLoaded)
      .catch(onError);
  };

  const onCharListLoading = () => {
    setNewItemLoading(true);
  };

  const onCharactersLoaded = newCharacters => {
    let ended = false;
    if (marvelService.totalCharacters - 9 <= offset) {
      ended = true;
    }

    setCharacters(characters => [...characters, ...newCharacters]);
    setLoading(false);
    setNewItemLoading(false);
    setOffset(offset => offset + 9);
    setCharEnded(ended);
  };

  const itemRefs = useRef([]);

  const onFocusItem = itemId => {
    itemRefs.current.forEach(item =>
      item.classList.remove('char__item_selected')
    );
    itemRefs.current[itemId].classList.add('char__item_selected');
    itemRefs.current[itemId].focus();
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const updateCharacters = () => {
    marvelService.getAllCharacters().then(onCharactersLoaded).catch(onError);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? (
    <View
      onFocusItem={onFocusItem}
      onCharSelected={onCharSelected}
      characters={characters}
      itemRefs={itemRefs}
    />
  ) : null;

  return (
    <div className="char__list">
      {errorMessage}
      {spinner}
      {content}
      <button
        style={{ display: charEnded ? 'none' : 'block' }}
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

CharList.propTypes = {
  onCharSelected: PropTypes.func
};

const View = ({ characters, onCharSelected, onFocusItem, itemRefs }) => {
  const charactersList = characters.map(({ name, thumbnail, id }, i) => {
    const thumbnailStyle =
      thumbnail ===
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ||
      thumbnail ===
        'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif'
        ? {
            objectFit: 'fill'
          }
        : null;

    return (
      <li
        ref={el => (itemRefs.current[i] = el)}
        tabIndex={0}
        onClick={() => {
          onCharSelected(id);
          onFocusItem(i);
        }}
        onKeyDown={e => {
          if (e.key === ' ' || e.key === 'Enter') {
            onCharSelected(id);
            onFocusItem(i);
          }
        }}
        key={id}
        className="char__item"
      >
        <img style={thumbnailStyle} src={thumbnail} alt={name} />
        <div className="char__name">{name}</div>
      </li>
    );
  });

  return <ul className="char__grid">{charactersList}</ul>;
};

export default CharList;
