import { VideoPlayer } from "./Video.styled"

const Video = () => {
    return (
        <VideoPlayer autoPlay muted loop>
            <source src="./video/20221016-133440-223.mp4" type="video/mp4" />
            <source src="./video/20221016-133440-223.webm" type="video/webm"/>
        </VideoPlayer>
    )
}
export default Video