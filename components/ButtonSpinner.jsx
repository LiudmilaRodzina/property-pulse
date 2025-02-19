'use client';
import BeatLoader from 'react-spinners/BeatLoader';

const override = {
  margin: '4px auto',
};

const ButtonSpinner = ({ loading }) => {
  return (
    <BeatLoader
      color="#fff"
      loading={loading}
      cssOverride={override}
      size={12}
      aria-label="Loading Spinner"
    />
  );
};

export default ButtonSpinner;
