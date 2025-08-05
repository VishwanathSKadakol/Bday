
        const audio = document.getElementById('background-music');

        function toggleMusic() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
