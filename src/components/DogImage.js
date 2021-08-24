const DogImage = (props) => {
  const { dogImage } = props;

  return (
    <div>
      <img src={dogImage} alt="Random Dog" />
    </div>
  );
}

export default DogImage;