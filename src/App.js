
import './App.css'
import { useEffect,useState ,search } from 'react'
const App = () => {
  const[data ,setData]=useState([])
  const[search, setSearch]=useState("")
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=40363707-fd4d688cdeece14389d70b48d&q=${search}&image_type=photo`)
    .then((res)=>res.json())
    .then(d=>setData(d.hits))
  },[data])
  return (
    <div className="App">
      <div className="Navbar">
        <section className='Nav'>
       <h1 id='cent'>Pixabay</h1>
       <div className='exp'>
        <h3>Explore</h3>
        <i class="fa-solid fa-bell">notf</i>
        <button id='btn'>Upload</button>
        </div>
        </section>
        <section className='Bar'>
        <center>
        <h1><b>Stunning royalty-free images & royalty-free stock</b></h1>
        <h4>Over 4.2 million+ high quality stock images, videos and music shared by our talented community.</h4>
          <input type="text" placeholder='Search for all images on Pixabay' onChange={(e)=>setSearch(e.target.value)}></input>
        </center>
        </section>
      </div>
      <div className='middle-menu'>
        <section className='Secicon'>
          <h3><i class="fa-solid fa-house"></i>Home</h3>
          <h3><i class="fa-solid fa-camera"></i>Photos</h3>
          <h3><i class="fa-solid fa-paintbrush"></i>Illustrations</h3>
          <h3><i class="fa-solid fa-pen-nib"></i>Vectors</h3>
          <h3><i class="fa-solid fa-video"></i>Videos</h3>
          <h3><i class="fa-solid fa-music"></i>Music</h3>
          <h3><i class="fa-solid fa-microphone-lines"></i>Sound Effects</h3>
          <h3><i class="fa-solid fa-fire-flame-curved"></i>GIFs</h3>
        </section>
        <section className='secimg'>
          <h5>Nature</h5>
          <h5>Wallpaper</h5>
          <h5>Background</h5>
          <h5>Sky</h5>
          <h5>Cat</h5>
          <h5>Food</h5>
          <h5>Flower</h5>
          <h5>Fall</h5>
          <h5>Space</h5>
          <h5>Forest</h5>
          <h5>Autumn</h5>
          <h5>iphone Wallpaper</h5>
        </section>
      </div>
      
      {data && data.map((x)=>{
        return(
          <section key={x.id} className='last'>
            <img src={x.webformatURL} height={"x.webformatHeight"} width={"x.webformatWidth"} ></img>
          </section>
        )
      })}
    </div>
  )
}

export default App
