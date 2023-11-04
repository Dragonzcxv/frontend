/**
 * Основной класс блоков
 *
 * @param { Element } el - элемент блока на странице
 */
class Block {
    public el: Element;

    public static get blockName() {
        return "";
    }

    constructor(el: Element) {
        this.el = el;
    }

    onInit() {
        //
    }
}

export default Block;
