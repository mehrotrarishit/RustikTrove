import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'; 

const ReviewsButtonWrapper = styled.button`
  position: fixed;
  bottom: 200px; /* Adjust the distance from the bottom */
  left: 96.1%;
  transform: translateX(-50%);
  background-color: #000000;
  color: rgb(238,234,135);
  padding: 5px 7px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transform: rotate(-90deg);
`;

const ReviewsIcon = styled.span`
  margin-right: 8px;
  cursor:pointer;
`;

const ReviewsButton = () => {
  return (
    <NavLink to="/reviews"><ReviewsButtonWrapper>
      <ReviewsIcon>⭐️</ReviewsIcon> Reviews
    </ReviewsButtonWrapper></NavLink>
  );
};

export default ReviewsButton;