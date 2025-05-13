import { useRouter } from 'next/router';

function RoomPage() {
  const router = useRouter();

  if (!router.isReady) return <p>Loading...</p>;

  const roomId = Array.isArray(router.query.roomId)
    ? router.query.roomId[0]
    : router.query.roomId;

  if (!roomId) return <p>Room ID not found</p>;

  return (
    <div>
      <h1>Room ID: {roomId}</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default RoomPage;
