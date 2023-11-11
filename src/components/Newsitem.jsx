import React from 'react'

const Newsitem =(props)=>{
 
  

  

    let {title , description, imageUrl,url,author,date} = props;
    return (
      <div>
        <div className="my-3">
       <div className="card" >
  <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2023/02/16/1600x900/asterfolio-PjoJga8EovQ-unsplash_1645007221190_1676539212933_1676539212933.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={url} className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
      </div>
    )
  
}

export default Newsitem
