import { Fragment, useState, useEffect } from 'react';
import DogImage from '../components/DogImage';
import defaultDogImage from '../assets/dog.jpg';

const DOG_IMAGE_RANDOMIZER_API = 'https://dog.ceo/api/breeds/image/random';

const Dog = (_props) => {
  const [dogImage, setDogImage] = useState(defaultDogImage);

  useEffect(() => {
    fetch(DOG_IMAGE_RANDOMIZER_API)
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") setDogImage(data.message);
    });
  }, [setDogImage]);

  return (
    <Fragment>
      <p>
        <code>Random Dog Picture</code>
      </p>
      <DogImage dogImage={dogImage} />
    </Fragment>
  );
}

export default Dog;