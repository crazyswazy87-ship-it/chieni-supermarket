const offers =[{
  id:'1',
  item:'Ajab Maize floor',
  price:{
    before:'Ksh 95',
    now:'Ksh 85'
  },
  img:'icons/ajab.webp'
},{
  id:'2',
  item:'Electric Iron',
  price:{
    before:'Ksh 1,550',
    now:'Ksh 1,320'
  },
  img:'icons/kettele.webp'
},{
  id:'3',
  item:'Jogoo Maize floor',
  price:{
    before:'Ksh 135',
    now:'Ksh 125'
  },
  img:'icons/jogoo.webp'
},{
  id:'4',
  item:'Ketepa Chai',
  price:{
    before:'Ksh 50',
    now:'Ksh 20'
  },
  img:'icons/ketepa.webp'
},{
  id:'5',
  item:'10ltr Cooking oil',
  price:{
    before:'Ksh 400',
    now:'Ksh 320'
  },
  img:'icons/oil.webp'
}

,{
  id:'2',
  item:'Electric Iron',
  price:{
    before:'Ksh 1,550',
    now:'Ksh 1,320'
  },
  img:'icons/kettele.webp'
},{
  id:'3',
  item:'Jogoo Maize floor',
  price:{
    before:'Ksh 135',
    now:'Ksh 125'
  },
  img:'icons/jogoo.webp'
},{
  id:'4',
  item:'Ketepa Chai',
  price:{
    before:'Ksh 50',
    now:'Ksh 20'
  },
  img:'icons/ketepa.webp'
},{
  id:'5',
  item:'10ltr Cooking oil',
  price:{
    before:'Ksh 400',
    now:'Ksh 320'
  },
  img:'icons/oil.webp'
},{
  id:'2',
  item:'Electric Iron',
  price:{
    before:'Ksh 1,550',
    now:'Ksh 1,320'
  },
  img:'icons/kettele.webp'
},{
  id:'3',
  item:'Jogoo Maize floor',
  price:{
    before:'Ksh 135',
    now:'Ksh 125'
  },
  img:'icons/jogoo.webp'
},{
  id:'4',
  item:'Ketepa Chai',
  price:{
    before:'Ksh 50',
    now:'Ksh 20'
  },
  img:'icons/ketepa.webp'
},{
  id:'5',
  item:'10ltr Cooking oil',
  price:{
    before:'Ksh 400',
    now:'Ksh 320'
  },
  img:'icons/oil.webp'
},{
  id:'2',
  item:'Electric Iron',
  price:{
    before:'Ksh 1,550',
    now:'Ksh 1,320'
  },
  img:'icons/kettele.webp'
},{
  id:'3',
  item:'Jogoo Maize floor',
  price:{
    before:'Ksh 135',
    now:'Ksh 125'
  },
  img:'icons/jogoo.webp'
},{
  id:'4',
  item:'Ketepa Chai',
  price:{
    before:'Ksh 50',
    now:'Ksh 20'
  },
  img:'icons/ketepa.webp'
},{
  id:'5',
  item:'10ltr Cooking oil',
  price:{
    before:'Ksh 400',
    now:'Ksh 320'
  },
  img:'icons/oil.webp'
},{
  id:'2',
  item:'Electric Iron',
  price:{
    before:'Ksh 1,550',
    now:'Ksh 1,320'
  },
  img:'icons/kettele.webp'
},{
  id:'3',
  item:'Jogoo Maize floor',
  price:{
    before:'Ksh 135',
    now:'Ksh 125'
  },
  img:'icons/jogoo.webp'
},{
  id:'4',
  item:'Ketepa Chai',
  price:{
    before:'Ksh 50',
    now:'Ksh 20'
  },
  img:'icons/ketepa.webp'
},{
  id:'5',
  item:'10ltr Cooking oil',
  price:{
    before:'Ksh 400',
    now:'Ksh 320'
  },
  img:'icons/oil.webp'
}];

let offerHtml = ''

offers.forEach((offer) => {
 offerHtml +=  `
    <div class="post-card">
      <div class="post-card">
        <div class="middle-b1x">
        <div style="display: flexbox;">
          <span class="item">
            ${offer.item}
          </span>
        </div>
        <div class="price-sec">
          <span class="price">
            <span class="comparison">Was@</span>
            ${offer.price.before}
          </span>
          <span class="price-now">
            <span class="comparison">Now@</span>
             ${offer.price.now}
          </span>
        </div>
        </div>
        <div class="bottom-b1x">
          <img  class="post-img" src="${offer.img}">
          <button 
          class="book-button"
            onclick="actionBtn()">
          <a href="checkout.html" class="l1nk">SHOP NOW</a>
        </button></div>
      </div>
    </div>
  `
  let finalOffer = document.querySelector('.js-posts').innerHTML = offerHtml;
})


