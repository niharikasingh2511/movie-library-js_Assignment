# movie-library

### Simple movie library using the [OMDb API](http://www.omdbapi.com/)

##### to compile a developer version with comments
```shell
npm run dev
```

##### to build a version ready for production
```shell
npm run build
```

##### live-server with hot reloading
```shell
npm run start
```

#### Create a .env file like:

```shell
API_KEY=fd0c9439
PROXY=https://cors-anywhere.herokuapp.com/
```

Functionalities :

1. View movie list
2. Search movies (includes pagination)
3. Sort on movies via its Title and Year
4. Movie details by clicking on movies
  1. Add the movie to you favourites
  2. Mark it as watched or not watched.
