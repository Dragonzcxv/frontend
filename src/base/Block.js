import Registration from "base/Registration";

/**
 * Основной класс блоков
 * 
 * @param { String } blockName - класс блока
 * @param { HTMLElement } el - элемент блока на странице
 */
class Block {
	constructor(el) {
		this.el = el;
		this.$el = null;

		if (window.jQuery) {
			this.$el = $(el);
		}
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