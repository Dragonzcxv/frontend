/**
 * Класс, содержащий инструментальные методы
 */
class Tools {
    /**
     * Добавляет скрипт при условии что его нету и возвращает промис о успешной загрузке скрипта
     * @param { string } src
     * @return { Promise<void> }
     */
    public static addScript(src: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!document.querySelector(`script[src="${src}"]`)) {
                const script = document.createElement("script");
                script.src = src;

                script.onload = function () {
                    resolve();
                };

                script.onerror = function () {
                    reject(new Error("Failed to load script: " + src));
                };

                document.head.appendChild(script);
            } else {
                resolve();
            }
        });
    }
}

export default Tools;
