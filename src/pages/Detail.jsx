import React, { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Bookdetails from "../components/BookList/Bookdetails";

function Detail() {
  const param = useParams();
  const location = useLocation();
  const { book } = location.state;
  const navigate = useNavigate();

  useEffect(() => {}, [param.id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleGoBack} className="goBack">
        Go Back
      </button>
      <Bookdetails book={book} />
    </div>
  );
}

export default Detail;
