import Registration from "base/Registration";

/**
 * Основной класс блоков
 * 
 * @param { HTMLElement } el - элемент блока на странице
 * @param { String } blockName - класс блока
 */
class Block {
    constructor(el, blockName) {
        this.el = el;
        this.blockName = blockName;
    }

    onInit() {
        //
    }

    /**
     * Регистрирует класс в глобальной переменной
     * 
     * @param { Object } instance - класс, наследованный от блока
     */
    static register(instance) {
        Registration.blockRegister(instance.blockName, instance);
    }
}

export default Block;
