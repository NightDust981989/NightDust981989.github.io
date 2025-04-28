const options = {
    narrow: false,
    autoplay: false,
    audio: [
        {
            name: 'Song Name',
            artist: 'Artist Name',
            url: 'https://example.com/path_to_your_audio_file.mp3',
            cover: 'https://example.com/path_to_album_cover.jpg' 
        },
        // ��������
    ]
};

const initAPlayer = () => {
    const playerElement = document.getElementById('aplayer');
    if (playerElement) {
        new APlayer({ ...options, element: playerElement });
    } else {
        console.error('APlayer element not found!');
    }
};

// ȷ���� DOM ������ɺ��ʼ�� APlayer
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAPlayer);
} else {
    initAPlayer();
}
