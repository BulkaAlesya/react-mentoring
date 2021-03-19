export class Movie {
  constructor(imgSrc, name, ganre, releaseDate, url, overview, runtime) {
    this.imgSrc = imgSrc;
    this.name = name;
    this.ganre = ganre;
    this.releaseDate = releaseDate;
    this.url = url;
    this.overview = overview;
    this.runtime = runtime;
  }
}

export const MovieList = [
  new Movie("https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    'Pulp Fiction', ['Action', 'Adventure'], 2004, 'PulpFiction.com', 'any text', 'more text'),

  new Movie("https://www.kino-teatr.ru/movie/poster/129457/91582.jpg",
    'Bohemian rhapsody', ['Drama', 'Biography', 'Music'], 2003, 'BohemianRhapsody.com', 'any text', 'more text'),
  

  new Movie("https://images-na.ssl-images-amazon.com/images/I/41dBu4DkbVL._AC_.jpg",
    'Kill Bill', ['Oscar winning movie'], 1994, 'KillBill.com', 'any text', 'more text'),
]