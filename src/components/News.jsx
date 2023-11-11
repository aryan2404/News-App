import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'

export class News extends Component {
 static defaultProps={
  country :'in',
  pageSize :8,
  category:'general'
 
 }
 static propTypes ={
  name :PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
 }
  handleNextClick = async()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/10)){
 }
    else{
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e63781c02224869adb84a205c41df28&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parseData = await data.json();
 console.log(parseData);
 this.setState({})
this.setState({
 page: this.state.page+1,
  articles:parseData.articles
})}
  }
  handlePrevClick= async()=>{
    
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e63781c02224869adb84a205c41df28&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parseData = await data.json();
 console.log(parseData);
 
this.setState({
 page: this.state.page-1,
  articles:parseData.articles
})
  }
 constructor(){
    super();
    console.log("hello I am a constructor from component")
    this.state={
articles:[],
page:1
    }}

  async  componentDidMount(){//${this.props.country},${this.state.page+1},&pageSize${this.props.pageSize}
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e63781c02224869adb84a205c41df28&page=1&pageSize=${this.props.pageSize}`
   let data = await fetch(url);
   let parseData = await data.json();
console.log(parseData);
this.setState({articles:parseData.articles,totalArticles:parseData.totalResults})

    }
  render() {
    return (
      <div className='container my-5'>
      <h1 className='text-center ' style={{margin:'40px 00px'}} >News Panda Top Headline</h1>
      <div className="row">
      {this.state.articles.map((element)=>{
        return (
          
 <div className="col-md-4"  key ={element.url}>
        <Newsitem title ={element.title ?element.title:" "} description={element.description ?element.description.slice(0,88):" "} imageUrl ={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt}/>
        </div>

        
        )
         } )}
       
       
      </div>
      <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
      </div>
    )
  }
}

export default News;
