import { Row, Col, Select, Flex } from "antd";
import { useState } from "react";
import List from "./List";

export default function MovieList({ movies }) {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleGenreChange = (value) => {
    setSelectedGenre(value);
    filterMovies(value, selectedYear);
  };

  const handleYearChange = (value) => {
    setSelectedYear(value);
    filterMovies(selectedGenre, value);
  };

  const filterMovies = (genre, year) => {
    let filteredMovies = movies;

    if (genre) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.genres.includes(genre)
      );
    }

    if (year) {
      filteredMovies = filteredMovies.filter((movie) => movie.year === year);
    }

    setMoviesToDisplay(filteredMovies);
  };

  return (
    <>
      <Row className="w-100" gutter={[30, 30]}>
        <Col xs={24} md={12}>
          <Flex vertical gap={8}>
            <label>Choose Genre</label>
            <Select
              options={[
                ...new Set(movies.map((movie) => movie.genres).flat()),
              ].map((genre) => {
                return { value: genre, label: genre };
              })}
              onChange={handleGenreChange}
              placeholder="Select Genre"
            />
          </Flex>
        </Col>
        <Col xs={24} md={12}>
          <Flex vertical gap={8}>
            <label>Choose Year</label>
            <Select
              options={[...new Set(movies.map((movie) => movie.year))]
                .sort()
                .map((year) => {
                  return { value: year, label: year };
                })}
              onChange={handleYearChange}
              placeholder="Select Year"
            />
          </Flex>
        </Col>
      </Row>
      <List movies={moviesToDisplay} />
    </>
  );
}
