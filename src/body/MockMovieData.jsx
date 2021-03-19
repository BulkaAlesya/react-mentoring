export class Movie {
  constructor(imgSrc, name, ganre, releaseDate) {
    this.imgSrc = imgSrc;
    this.name = name;
    this.ganre = ganre;
    this.releaseDate = releaseDate;
  }
}

export const MovieList = [
  new Movie("https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    'Pulp Fiction', ['Action', 'Adventure'], 2004),

  new Movie("https://www.kino-teatr.ru/movie/poster/129457/91582.jpg",
    'Bohemian rhapsody', ['Drama', 'Biography', 'Music'], 2003),
  

  new Movie("https://images-na.ssl-images-amazon.com/images/I/41dBu4DkbVL._AC_.jpg",
    'Kill Bill', ['Oscar winning movie'], 1994),
]