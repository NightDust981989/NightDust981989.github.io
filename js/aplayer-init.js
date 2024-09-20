const options = {
    element: document.getElementById('player'), // ��Ĳ�����Ԫ��
    narrow: false,
    autoplay: false,
    audio: [
        {
            name: 'Song Name',
            artist: 'Artist Name',
            url: 'https://example.com/path_to_your_audio_file.mp3',
            pic: 'https://example.com/path_to_album_cover.jpg'
        },
        // ��������
    ]
};

const initAPlayer = () => {
    if (document.getElementById('player')) {
        new APlayer(options);
    }
};

// ȷ���� DOM ������ɺ��ʼ�� APlayer
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAPlayer);
} else {
    initAPlayer();
}
