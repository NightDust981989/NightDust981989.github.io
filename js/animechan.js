console.log('%c animechan API', 'color: #4CAF50; font-size: 16px; font-weight: bold;');
export async function getRandomAnimeQuote() {

    const url = "https://api.animechan.io/v1/quotes/random";
    try {
        // ���� GET ����
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const content = data.data.content || "��¼��ȡʧ��";
            const character = data.data.character.name || "��ɫ��ȡʧ��";
            const anime = data.data.anime.name || "������ȡʧ��";
            return { anime, character, content };
        } else {
            throw new Error(`����ʧ�ܣ�״̬�룺${response.status}`);
        }
    } catch (error) {
        // �����׳���������еĴ���
        throw new Error(`���������${error.message}`);
    }
}