import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "../assets/news.jpg";

const NewsItems = ({ title, description, url, src }) => {
  return (
    <div
      // className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3"
      style={{
        maxwidth: "345px",
        margin: "20px",
        padding: "5px",
        border: "d-inline-block",
      }}
    >
      <Card>
        <Card.Img variant="top" src={src ? src : image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button>
            <a href={url} className="btn btn-primary">
              Read More
            </a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsItems;
