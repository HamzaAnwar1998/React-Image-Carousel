import {useState} from 'react'
import ride0 from './images/0.jpg';
import ride1 from './images/1.jpg';
import ride2 from './images/2.jpg';
import Icon from 'react-icons-kit';
import {arrows_circle_left} from 'react-icons-kit/linea/arrows_circle_left'
import {arrows_circle_right} from 'react-icons-kit/linea/arrows_circle_right'

function App() {

  // images array state
  const [images] = useState([
    {id: 0, image: ride0},
    {id: 1, image: ride1},
    {id: 2, image: ride2}
  ])

  // current image state
  const [currentImg, setCurrentImg] = useState(0);

  // next slide function
  const nextSlide=()=>{
    setCurrentImg(currentImg===images.length - 1 ? 0 : currentImg + 1);
  }

  // prev slide functiom
  const prevSlide=()=>{
    setCurrentImg(currentImg===0 ? images.length - 1 : currentImg - 1);
  }

  return (
    <>
      <h3>Image Carousel for React Beginners 2023</h3>
      <div className='slider'>

        <div className='btns' onClick={prevSlide}>
          <Icon icon={arrows_circle_right} size={48}/>
        </div>

        {images.map((image, index)=>(
          currentImg===index&&(
            <div className='image-div' key={image.id}>
              <img alt='slide' src={image.image}/>
            </div>
          )
        ))}

        <div className='btns' onClick={nextSlide}>
          <Icon icon={arrows_circle_left} size={48}/>
        </div>

      </div>
    </>
  );
}

export default App;
