import "./styles.css";

const movies = [
  {
    id: 1,
    title: "HIGHWAY",
    year: "2014",
    genre: "Drama • Romance",
    image:
      "https://ccgnludelhi.wordpress.com/wp-content/uploads/2014/07/highway-movie-poster.jpg",
  },
  {
    id: 2,
    title: "THE FAMILY MAN",
    year: "2019",
    genre: "Action • Thriller",
    image: "https://upload.wikimedia.org/wikipedia/en/d/dc/The_Family_Man.jpeg",
  },
  {
    id: 3,
    title: "MIRZAPUR",
    year: "2018",
    genre: "Crime • Drama",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvL5GPcB-JxERNDdxQYV-Vn3jXLJpO_p3HGA&s",
  },
  {
    id: 4,
    title: "SCAM 1992",
    year: "2020",
    genre: "Biography • Drama",
    image:
      "https://www.koimoi.com/wp-content/new-galleries/2020/12/scam-1992-is-streaming-on-sonyliv-since-oct-9-001.jpg",
  },
  {
    id: 5,
    title: "MUMBAI DIARIES",
    year: "2021",
    genre: "Drama • Medical",
    image:
      "https://images.ottplay.com/images/detail-from-the-poster-for-mumbai-diaries-amazon-prime-video-470.jpg",
  },
  {
    id: 6,
    title: "ARYA",
    year: "2022",
    genre: "Action • Crime",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35J_U5wSpbgxE-esfpdxMlbyWVDBMbuC4pg&s",
  },
];

export default function MovieCards() {
  return (
    <div className="movie-slider">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={movie.image}
            alt={movie.title}
            className="movie-card-image"
          />
          <div className="movie-card-overlay" />
          <img className="prime-logo" src="" />
        </div>
      ))}
    </div>
  );
}
