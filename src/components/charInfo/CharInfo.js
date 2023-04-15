import { Component } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import MarvelService from '../../services/MarvelService';

import './charInfo.scss';

class CharInfo extends Component {
  state = {
    char: null,
    loading: false,
    error: false
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  onCharLoading = () => {
    this.setState({ loading: true });
  };

  onCharLoaded = char => {
    this.setState({ char, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateChar = () => {
    const { charId } = this.props;
    if (!charId) {
      return;
    }

    this.onCharLoading();

    this.marvelService
      .getCharacter(charId)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state;

    const skeleton = char || loading || error ? null : <Skeleton />;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
      <div className="char__info">
        {skeleton}
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

CharInfo.propTypes = {
  charId: PropTypes.number
};

const View = ({ char }) => {
  const { comics, description, homepage, name, thumbnail, wiki } = char;

  const comicsList = comics.map(({ name }, i) => (
    <li key={i} className="char__comics-item">
      {name}
    </li>
  ));

  const thumbnailStyle =
    thumbnail ===
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ||
    thumbnail ===
      'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif'
      ? {
          objectFit: 'contain'
        }
      : null;

  return (
    <>
      <div className="char__basics">
        <img style={thumbnailStyle} src={thumbnail} alt="abyss" />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      {comicsList.length === 0 ? (
        <div className="char__comics">Comics not found</div>
      ) : (
        <>
          <div className="char__comics">Comics:</div>
          <ul className="char__comics-list">{comicsList}</ul>
        </>
      )}
    </>
  );
};

export default CharInfo;
