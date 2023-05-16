/**
 *  Класс для регистрации блоков
 */
class Registration {
    static _blocks = [];

    /**
     * 
     */
    static blocksInit() {
        this._blocks.forEach(block => {
            const elements = document.querySelectorAll(`.${block.name}`);

            if (elements.length > 0) {
                elements.forEach(elem => {
                    new block.class(elem, block.name).onInit();
                });
            }
        });
    }

    /**
     * 
     * @param {*} name 
     * @param {*} instance 
     */
    static blockRegister(name, instance) {
        this._blocks.push({
            name: name,
            class: instance
        });
    }
}

export default Registration;
