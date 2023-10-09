import dog from '../assets/svg/dog.svg'
import cat from '../assets/svg/cat.svg'
import HomeSearchBar from '../components/HomeSearchBar/HomeSearchBar'


function Home() {
  return (
    <div className='home'>
        <img className='dog' src={dog} alt="dog image" />
        <img className='cat' src={cat} alt="cat image" />
        <HomeSearchBar />
        <div className='home_main_content'>
                <h1>Ceci est un titre</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec auctor tristique nisl, eu maximus nibh feugiat quis. 
                    Suspendisse et dolor porta, faucibus ligula at, bibendum risus. 
                    Quisque id scelerisque nisl. Ut id purus elit. 
                    Donec gravida nisl ipsum, eu aliquet velit faucibus convallis.
                    Sed sapien odio, tincidunt eget ornare at, tempor in magna.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>           
        </div>    
    </div>
  )
}

export default Home