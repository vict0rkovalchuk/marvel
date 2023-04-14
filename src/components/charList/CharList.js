import { Component } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {
  state = {
    characters: [],
    loading: true,
    error: false
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateCharacters();
  }

  onCharactersLoaded = characters => {
    this.setState({ characters, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateCharacters = () => {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharactersLoaded)
      .catch(this.onError);
  };

  render() {
    const { characters, loading, error } = this.state;

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? (
      <View
        onCharSelected={this.props.onCharSelected}
        characters={characters}
      />
    ) : null;

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

const View = ({ characters, onCharSelected }) => {
  const charactersList = characters.map(({ name, thumbnail, id }) => (
    <li onClick={() => onCharSelected(id)} key={id} className="char__item">
      <img src={thumbnail} alt={name} />
      <div className="char__name">{name}</div>
    </li>
  ));

  return <ul className="char__grid">{charactersList}</ul>;
};

export default CharList;
