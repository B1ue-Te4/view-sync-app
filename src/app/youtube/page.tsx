import YouTubePlayer from '@/components/YouTubePlayer'

export default function YouTubePage() {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    do

    return (
        <main>
            <h1>YouTube Player</h1>
            <p>Embed a YouTube video player in your Next.js app.</p>
            <YouTubePlayer videoId="Cgdjl_AudgQ" />
        </main>
    )
}