import { useState } from "react";
import { Form } from "./Form";
import { SubmittedReviewsCard } from "./SubmittedReviews";
import { Header } from "./Header";

type Review = {
  name: string;
  id: number;
  description: string;
  rating: string;
  image: string;
};

export default () => {
  // I had already used chatGPT in the previous assignment for useState<Review[]>([])

  const [reviews, setReviews] = useState<Review[]>([]);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newRating, setNewRating] = useState("");
  const [file, setFile] = useState("");

  const addReview = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 1000000);
    const reviewObject = {
      name: newName,
      description: newDescription,
      rating: newRating,
      image: file,
      id,
    };
    setReviews(reviews.concat(reviewObject));
    setNewName("");
    setNewDescription("");
    setNewRating("");
    setFile("");
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewDescription(event.target.value);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewRating(event.target.value);
  };

  // I also used chatGPT to make this event type correct
  const getFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleDeleteClick = (idToDelete: number) => {
    const index = reviews.findIndex((event) => event.id === idToDelete);
    if (index !== -1) {
      const newArray = [
        ...reviews.slice(0, index),
        ...reviews.slice(index + 1),
      ];
      setReviews(newArray);
    }
  };

  return (
    <>
      <div className="form-container">
        <Header text="Add Your Game Review" />
        <Form
          addReview={addReview}
          newName={newName}
          handleNameChange={handleNameChange}
          newDescription={newDescription}
          handleDescriptionChange={handleDescriptionChange}
          newRating={newRating}
          handleRatingChange={handleRatingChange}
          getFile={getFile}
        />
      </div>
      <SubmittedReviewsCard
        reviewsList={reviews}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};
