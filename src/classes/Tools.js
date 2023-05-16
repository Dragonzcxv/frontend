/**
 * Класс, содержащий инструментальные методы
 */
class Tools {
    /**
     * Подключает скрипт по переданному адресу
     * 
     * @param {string} src адрес подключаемого скрипта
     * @returns {Promise}
     */
    static addScript(src) {
        return new Promise(function(resolve, reject) {
            // Если такой скрипт уже подключен - не подключаем повторно, а сразу отдём resolve
            if (!document.querySelector(`script[src="${src}"]`)) {
                var script = document.createElement('script');
                script.src = src;
    
                script.onload = function() {
                    resolve();
                };
    
                script.onerror = function() {
                    console.error('Failed to load script: ' + src);
                    reject();
                };
    
                document.head.appendChild(script);
            } else {
                resolve();
            }
        });
    }
}

export default Tools;
