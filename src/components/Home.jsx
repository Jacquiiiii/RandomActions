import styled from 'styled-components'
import { boxShadow } from '../constants/constants'
import Nav from "./Nav"

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  h2 {
    font-size: 7em;
    margin-top: 1em;
    color: whitesmoke;
  }
  img {
    width: 150px;
    height: auto;
    border-radius: 0.25em;
    box-shadow: ${boxShadow}
  }
`

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 90%;
  gap: 50px;
  margin: 3em;
`

const images = [
    'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80',
    'https://media.istockphoto.com/id/173682323/photo/says.jpg?s=612x612&w=0&k=20&c=7jnXQrYzUWNTnLhjPgimxHIbjsaHvZmAMALGVzYNARQ=',
    'https://i.pinimg.com/originals/cc/61/e0/cc61e0afec490d5a8e59ba330c67ab2a.jpg',
    'https://picsum.photos/id/237/536/354',
    'https://cdn.wallpapersafari.com/40/52/lHEsPO.jpg',
    'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg',
    'https://i.pinimg.com/736x/44/29/f0/4429f02128255f000ff0f11e03fc2cb2.jpg',
    'https://pbs.twimg.com/profile_images/1590568972549767169/Jz5iobmq_400x400.jpg',
    'https://i.redd.it/jeuusd992wd41.jpg',
    'https://e1.pxfuel.com/desktop-wallpaper/176/18/desktop-wallpaper-lockscreens-icons-random-girl-thumbnail.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQe5cIb1xmRGQl-lHZyre-d7yizbrdkdIj9wdxUW5vir61mLUEykU8BPwa9jVIhJTpVg&usqp=CAU',
    'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80',
    'https://images2.fanpop.com/image/photos/8600000/random-animals-animals-8675984-377-442.jpg',
    'https://miro.medium.com/v2/resize:fit:1400/1*TzaiFDmkiEkOxNU7eG43pw.jpeg'
  ]

const Home = () => {
  return (
    <HomeContainer>
      <Nav />
      <ImagesContainer>
        {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt="random"
        />
      ))}
      </ImagesContainer>
    </HomeContainer>
  )
}

export default Home