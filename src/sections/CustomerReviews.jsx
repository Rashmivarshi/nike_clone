import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"


const CustomerReviews = () => {
  return (
    <section className=" max-container">
    <h3 className="text-4xl text-center font-palanquin  font-bold">
     Customer
      <span className="text-coral-red">  Stories</span>
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
      Our customers' satisfaction is our top priority, and we're delighted to share their stories of joy and comfort with you
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center
      max-lg:flex-col gap-14">
        {reviews.map((review,index)=>(
          <ReviewCard 
          key={index}
          imgURL={review.imgURL}
          feedback={review.feedback}
          rating={review.rating}
          customerName={review.customerName}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews