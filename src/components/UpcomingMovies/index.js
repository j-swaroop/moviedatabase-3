import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Movie from '../Movie'
import './index.css'

class UpcomingMovies extends Component {
  state = {
    upcomingData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getUpcomingData()
  }

  getUpcomingData = async () => {
    const key = '2abedcb807ab04027da1284d52c87a8b'
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`

    const response = await fetch(url)
    const data = await response.json()
    if (response.ok === true) {
      const imgUrl = 'https://image.tmdb.org/t/p/w500'
      const updated = data.results.map(item => item)
      const updatedData = updated.map(item => ({
        posterPath: imgUrl + item.poster_path,
        id: item.id,
        title: item.title,
        rating: item.vote_average,
      }))

      this.setState({upcomingData: updatedData, isLoading: false})
    }
  }

  renerLoader = () => {
    return (
      <div className="loader-container">
        <Loader type="TailSpin" height={50} width={50} />
      </div>
    )
  }

  renderUpcomingContent = () => {
    const {upcomingData} = this.state
    return (
      <ul className="movies-list">
        {upcomingData.map(item => (
          <Movie details={item} key={item.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        <div className="upcoming-container">
          <div className="upcoming-responsive-container">
            {isLoading ? this.renerLoader() : this.renderUpcomingContent()}
          </div>
        </div>
      </>
    )
  }
}

export default UpcomingMovies
