import { useEffect, useState } from 'react'
import imageSlide from '../assets/data'
import '../backgroundSlider.css'

const HomeCarrucel = () => {
  const [currentState, setCurrentState] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0)
      } else {
        setCurrentState(currentState + 1)
      }
    }, 7000);
    return () => clearTimeout(timer)
  }, [currentState])
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%'
  }
  const goToNext = (currentState) => {
    setCurrentState(currentState)
  }
  return (
    <div className=' h-[100%] flex'>
      <div style={bgImageStyle}>
        <div className='flex h-[100%] w-[100%] bg-gradient-to-br from-[rgba(15,32,227,0.5)] to-#FF5733 items-center'>
          <div className='flex flex-col h-[100%] justify-around '>

            <div className="">
              <h1 className='text-css-h1 animate-fade-right animate-infinite animate-duration-[6900ms]  text-6xl  ml-10 text-white '>{/* {imageSlide[currentState].title} */}</h1>
            </div>
           
            <div className="w-[60%]  self-end">
              <p className=' text-css animate-fade-up animate-infinite animate-duration-[6900ms]  text-3xl  text-gray-50'>{imageSlide[currentState].body}</p>
            </div>
          </div>
          <div className=''>
            {
              imageSlide.map((imageSlide, currentState) => (
                <span key={currentState} onClick={() => goToNext(currentState)}
                  className='    rounded w-9 h-1  bg-slate-300'>

                </span>
              ))
            }
          </div>

        </div>

      </div>
    </div>
  )
}

export default HomeCarrucel