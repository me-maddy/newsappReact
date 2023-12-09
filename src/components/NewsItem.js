import React from 'react'

export default function NewsItem({title , description , imageUrl , url , name , color, author , date}) {
  return (
    <div className="card">
          <div className='batchStyle'>
          <span className={`badge rounded-pill bg-${color}`}>
          {name}
          </span>
          </div>
    
        <img src={imageUrl ? imageUrl : "https://www.livemint.com/lm-img/img/2023/06/05/600x338/Multibagger_stocks_Vijay_Kedia_Dolly_Khanna_1685955241781_1685955242009.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title ? title.length < 45 ? title : title.slice(0,45).concat("...") : "Just visit on below read more button to know the main heading of this news!"}</h5>
          <p className="card-text">{description ? description.length<84 ? description : description.slice(0,84).concat("...") : "To get to know more about this news , just click on below read more button and you will get this news in detailed!"}</p>
          <p class="card-text"><small class="text-body-secondary">By {author ? author : "Reporter"} on {new Date(date).toGMTString()}</small></p>
          <a href={url} rel="noreferrer" target='_blank' className={`btn btn-${color}`}>Read more</a>
        </div>
      </div>
  )
}
