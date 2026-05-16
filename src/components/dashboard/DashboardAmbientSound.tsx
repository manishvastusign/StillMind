import { useEffect, useRef } from "react";

export function DashboardAmbientSound() {

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.15;

    const playAudio = async () => {

      try {

        await audio.play();

        // UNMUTE AFTER PLAY
        setTimeout(() => {

          audio.muted = false;

        }, 300);

      } catch (err) {

        console.log("Autoplay blocked");

      }
    };

    playAudio();

  }, []);

  return (
    <audio
      ref={audioRef}
      autoPlay
      muted
      loop
      preload="auto"
    >
      <source
        src="/Nature.mp3"
        type="audio/mpeg"
      />
    </audio>
  );
}