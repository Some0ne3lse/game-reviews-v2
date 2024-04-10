import { DeleteButton } from "./DeleteButton";

type Review = {
  name: string;
  description: string;
  rating: string;
  image: string;
  id: number;
};

type SubmittedReviewsProps = {
  reviewsList: Review[];
  handleDeleteClick: any;
};

export const SubmittedReviewsCard = (props: SubmittedReviewsProps) => {
  return (
    <ul className="entire-list">
      {props.reviewsList.map((game: any) => (
        <li className="list-item" key={game.id} id={game.id}>
          <div className="review-content">
            <div className="text-content">
              <div>
                <h3>Game:</h3>
                {game.name}
              </div>
              <div>
                <h3>Description:</h3>
                {game.description}
              </div>
              <div>
                <h3>Rating:</h3>
                {game.rating} / 10
              </div>
            </div>
            <div className="image-and-button">
              {game.image != null && (
                <img className="review-image" src={game.image} />
              )}
              <DeleteButton
                handleDeleteClick={props.handleDeleteClick}
                // I couldn't figure out how to pass the id correctly, so I got help from chatGPT to figure out where to find the id. Everything else I did myself
                id={game.id}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
