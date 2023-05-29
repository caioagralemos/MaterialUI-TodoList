import { useState } from "react";
import Rating from '@mui/material/Rating';

export default function RatingDemo() {
    const [rating, setRating] = useState(0)
    return (
        <div>
            <h1>Rating Demo</h1>
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
            />
            <button onClick={() => alert(rating)}>Submit</button>
        </div>
    )
}