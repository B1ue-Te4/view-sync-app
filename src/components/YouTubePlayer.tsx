import { useEffect, useRef } from "react"

type YouTubePlayerProps = { videoId: string }

export default function YouTubePlayer(props: YouTubePlayerProps) {
    const { videoId } = props
    const playerRef = useRef<any>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
      const tag = document.createElement("script")
        tag.src = "https://www.youtube/com/iframe_api"
        document.body.appendChild(tag)

        (window as any).onYouTubeIframeAPIReady = () => {
            if (containerRef.current) {

            }
    })

    return (
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    )
}