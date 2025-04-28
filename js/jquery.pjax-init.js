$(document).on('pjax:complete', function () {
    // Meting.js ���Զ���ʼ�� aPlayer
    const ap = document.getElementById('aplayer');
    if (ap) {
        // ������������
        const player = ap.aplayer;
        if (player) {
            player.play(); // ȷ�����ּ�������
        }
    }
});