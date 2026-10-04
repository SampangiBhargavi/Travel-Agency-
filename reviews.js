const defaultReviews = [
{
id: 1,
name: "Priya Sharma",
location: "Hyderabad",
rating: 5,
comment: "Amazing travel experience! The Goa package was well planned and everything was comfortable.",
date: "2026-08-10",
status: "Published"
},
{
id: 2,
name: "Rahul Verma",
location: "Bangalore",
rating: 4,
comment: "The Manali trip was wonderful. The hotel and sightseeing arrangements were very good.",
date: "2026-08-18",
status: "Published"
},
{
id: 3,
name: "Sneha Reddy",
location: "Hyderabad",
rating: 5,
comment: "Dubai trip was excellent. The team was very helpful and the overall experience was fantastic.",
date: "2026-08-25",
status: "Published"
},
{
id: 4,
name: "Arjun Kumar",
location: "Chennai",
rating: 4.5,
comment: "Kerala was beautiful and the package was reasonably priced. I really enjoyed the backwater experience.",
date: "2026-09-02",
status: "Published"
},
{
id: 5,
name: "Ananya Rao",
location: "Mumbai",
rating: 5,
comment: "Bali was an unforgettable experience. Everything was organized perfectly.",
date: "2026-09-08",
status: "Published"
},
{
id: 6,
name: "Kiran Patel",
location: "Pune",
rating: 4.5,
comment: "Paris trip was amazing. The itinerary was good and the support from WanderWorld was excellent.",
date: "2026-09-15",
status: "Published"
}
];

function getReviews() {

```
const storedReviews =
    localStorage.getItem("wanderWorldReviews");

if (storedReviews) {
    return JSON.parse(storedReviews);
}

localStorage.setItem(
    "wanderWorldReviews",
    JSON.stringify(defaultReviews)
);

return defaultReviews;
```

}

function saveReviews(reviewList) {

```
localStorage.setItem(
    "wanderWorldReviews",
    JSON.stringify(reviewList)
);
```

}

function getReviewById(id) {

```
return getReviews().find(
    review => review.id == id
);
```

}

function addReview(newReview) {

```
const reviews = getReviews();

newReview.id = Date.now();

newReview.status =
    newReview.status || "Pending";

newReview.date =
    newReview.date ||
    new Date().toISOString().split("T")[0];

reviews.push(newReview);

saveReviews(reviews);

return newReview;
```

}

function updateReview(updatedReview) {

```
const reviews = getReviews();

const index = reviews.findIndex(
    review => review.id == updatedReview.id
);

if (index !== -1) {

    reviews[index] = updatedReview;

    saveReviews(reviews);

    return true;
}

return false;
```

}

function deleteReview(id) {

```
const reviews = getReviews();

const updatedReviews =
    reviews.filter(
        review => review.id != id
    );

saveReviews(updatedReviews);
```

}

function searchReviews(searchText) {

```
const reviews = getReviews();

const text =
    searchText.toLowerCase().trim();

if (!text) {
    return reviews;
}

return reviews.filter(review =>
    review.name.toLowerCase().includes(text) ||
    review.location.toLowerCase().includes(text) ||
    review.comment.toLowerCase().includes(text)
);
```

}

function filterReviews(status) {

```
const reviews = getReviews();

if (!status || status === "All") {
    return reviews;
}

return reviews.filter(
    review => review.status === status
);
```

}

function getPublishedReviews() {

```
return getReviews().filter(
    review => review.status === "Published"
);
```

}
