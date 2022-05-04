const express = require("express");
const router = express.Router({ mergeParams: true }); //mergeparams set to true to get the id params we have in the app.js, otherwise they won't be taken here into consideration

const reviews = require("../controllers/reviews");

const catchAsync = require("../utils/catchAsync");

const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");

router.post("/", isLoggedIn, validateReview, catchAsync(reviews.createReview));

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(reviews.deleteReview)
);

module.exports = router;
