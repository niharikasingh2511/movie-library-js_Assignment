import axios from 'axios';

// Search class model
export default class MovieList {
  // Passing the query when creating a new search
  constructor(query) {
    this.query = query;
  }

  // Get results from query
  async getMoviesList() {
    const apiKey = process.env.API_KEY;
    const proxy = process.env.PROXY;
    const res = await axios.get(
        `http://www.omdbapi.com/?s=inception&apikey=${apiKey}`
    );
      // Save the data on the object
      this.result = res.data;
      //this.page = page;
    } catch (error) {
      console.log(error);
    }

}
