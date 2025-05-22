import YouTubePlayer from "@/components/YouTubePlayer"

enum Genre {
    music = "bgWCEnkLieE",
    movie = "qUyNQRHf2cM"
}

export default function RoomPage({ params }) {
    const { roomId } = params

    let ytId
    if (roomId in Genre) {
       ytId = Genre[roomId]
    } else {
            return ( 
              <p>動画が見つかりません</p>
          )
    }
    
    return (
        <main>
            <h1>Room Page</h1>
            <p>This is the room page for room: {roomId}</p>
            <YouTubePlayer videoId={ytId} />
        </main>
    )
}