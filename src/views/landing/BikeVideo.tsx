import {useEffect, useRef} from "react";

const BikeVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if(videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
    }, []);
    return (
        <video
            src="/static/bike-video.mp4"
            autoPlay={true}
            muted={true}
            loop={true}
            ref={videoRef}
            className="h-full w-full object-cover rounded-lg shadow-2xl"
        >

        </video>

    )
}

export default BikeVideo