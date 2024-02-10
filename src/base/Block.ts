/**
 * Основной класс блоков
 *
 * @param { Element } el - элемент блока на странице
 */
class Block {
	public el: HTMLElement;

	public static get blockName() {
		return "";
	}

	constructor(el: HTMLElement) {
		this.el = el;
	}

	onInit() {
		//
	}
}

export default Block;
