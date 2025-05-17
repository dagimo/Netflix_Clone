import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

function RowList() {
  return (
    <>
    <Row 
        title="NETFLIX ORIGNINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}/>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
    <Row title="Action Moview" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="TV Show" fetchUrl={requests.fetchTvShows}/>
    <Row title="Documentaries" fetchUrl={requests.fectchDocumentaries}/>
    </>
  )
}

export default RowList