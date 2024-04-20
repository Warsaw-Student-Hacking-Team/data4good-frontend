import Lottie from "lottie-react";
import bikeAnimation from "~/assets/lottie/bike-animation.json";

const BikeAnimation = (props) => (
    <Lottie animationData={bikeAnimation} {...props} />
)

export default BikeAnimation