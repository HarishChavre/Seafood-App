import React from 'react'

function Carousel() {
  return (
    <div><div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner" id='carousel'>
      <div className="carousel-item active">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Focean-restaurant-dish-meal-food-seafood-fish-cuisine-invertebrate-shrimp-lobster-asian-food-animal-source-foods-spiny-lobster-1237990.jpg&f=1&nofb=1&ipt=4593d5fb184094cc7bf517f06150e68eba8140f8f14613086c312c0ab4d6733b&ipo=images" class="d-block w-100"  style={{brightness:"(30%)"}}  alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VLqybyxzgiBE68_OpeQrcwHaEL%26pid%3DApi&f=1&ipt=1ec061e1a4043b11f451f8d70b6e80b2a8341d00f89a8148af875ad6183349a6&ipo=images" class="d-block w-100" style={{brightness:"(30%)"}} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://4.bp.blogspot.com/-0PNKYpdKha4/V4UN7UnTeOI/AAAAAAAAAY8/I1UnFC1MnMo-m0AQkSXw7_4-IMWzGPxBACLcB/s1600/shr41.jpg" class="d-block w-100" style={{brightness:"(30%)"}}  alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}

export default Carousel