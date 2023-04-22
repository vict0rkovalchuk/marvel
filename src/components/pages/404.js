import ErrorMessage from '../errorMessage/ErrorMessage';
import { useHistory } from 'react-router-dom';

const Page404 = () => {
  const history = useHistory();

  return (
    <div>
      <ErrorMessage>
        <p
          style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}
        >
          Page doesn't exist
        </p>
        <div
          onClick={() => history.goBack()}
          style={{
            cursor: 'pointer',
            display: 'block',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '24px',
            marginTop: '30px'
          }}
        >
          Go Back
        </div>
      </ErrorMessage>
    </div>
  );
};

export default Page404;
