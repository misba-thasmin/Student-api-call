import React from 'react'
import Nav from './Nav'

const Home = () => {
  return (
    <div>
        <Nav />
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOV-7-lS4OAMs00VPjW836Dc0DcGAuxiJMuw&s" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/008/605/812/small/hand-celebrate-college-graduation-background-free-vector.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3oSQ0TkN7IRDlnNulDo4F_lN0XoF7_7pqK4eN6EFWp9f2vbFJIjNIo8lxQFuOVWwc500&usqp=CAU" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



    </div>
  )
}

export default Home