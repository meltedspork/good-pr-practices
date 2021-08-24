import { useState } from 'react';
import defaultDogImage from '../assets/dog.jpg';

const DOG_IMAGE_RANDOMIZER_API = 'https://dog.ceo/api/breeds/image/random';

const Dog = (_props) => {
  const [dogImage, _setDogImage] = useState(defaultDogImage);

  fetch(DOG_IMAGE_RANDOMIZER_API)
    .then(response => response.json())
    .then(data => console.log(data));

  return (
    <div>
      <img src={dogImage} alt="Logo" />
    </div>
  );
}

export default Dog;