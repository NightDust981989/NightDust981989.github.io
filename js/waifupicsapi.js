async function getWaifuImage() {
    const url = "https://api.waifu.pics/sfw/neko";
    try {
        // 发起 GET 请求
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`请求失败，状态码：${response.status}`);
        }
        // 将响应转换为 JSON 格式
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

// 导出函数供外部使用
export { getWaifuImage };
console.log('%cWAIFU.PICS API', 'color: orange; font-size: 16px; font-weight: bold; background-color: black; padding: 5px;');

