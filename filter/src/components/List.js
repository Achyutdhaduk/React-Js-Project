/**
 * List component to render the movies
 * This component is for the UI only, do not make any changes.
 *
 * @author Niraj Gohel, Hand of the King.
 */

import { Row, Col, Card, Typography } from "antd";
export default function List({ movies }) {
  return (
    <>
      <Row gutter={[30, 30]} style={{ width: "100%", marginTop: 30 }}>
        {movies.map((movie) => {
          return (
            <Col span={8}>
              <Card key={movie.id} cover={<img src={movie.posterUrl} />}>
                <Card.Meta
                  title={movie.title}
                  description={
                    <Typography.Text ellipsis>{movie.plot}</Typography.Text>
                  }
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
