document.addEventListener('DOMContentLoaded', function() {
    
    const audio = document.getElementById('background-audio');
    let hasUnmuted = false;

    function unmuteAudioOnInteraction() {
        if (audio && audio.muted && !hasUnmuted) {
            audio.muted = false;
            hasUnmuted = true;
            audio.volume = 0.2;
            document.removeEventListener('click', unmuteAudioOnInteraction);
            document.removeEventListener('touchstart', unmuteAudioOnInteraction);
        }
    }

    if (audio) {
        audio.play()
            .then(() => {
                console.log("Audio di sottofondo muto avviato con successo.");
            })
            .catch(error => {
                console.warn("L'autoplay dell'audio muto è fallito. L'audio potrebbe non riprodursi.", error);
            });
        

        document.addEventListener('click', unmuteAudioOnInteraction);
        document.addEventListener('touchstart', unmuteAudioOnInteraction);
    }
});