import img from './error.gif';

const ErrorMessage = ({ children }) => {
  return (
    <>
      <img
        style={{
          display: 'block',
          width: '250px',
          height: '250px',
          objectFit: 'contain',
          margin: '0 auto'
        }}
        alt="error"
        src={img}
      />
      {children}
    </>
  );
};

export default ErrorMessage;
