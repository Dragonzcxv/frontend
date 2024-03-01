// TODO: Подумать на досуге как перевести на ts
import config from "../style/export.module.scss";

/**
 * Класс для работы с общим конфигом стилей
 */
class StyleConfig {
	/**
	 * Возвращает объект, который содержит значения конфига стилей
	 *
	 * @returns {object}
	 */
	static get() {
		return {
			siteBreakpoints: this.getCollection("site-breakpoints", true),
			indents: this.getCollection("indents"),
		};
	}

	/**
	 * Собирает объект со значениями по названию параметра
	 * @param {string} name название параметра
	 * @param {bool} px_to_number конвертировать px в числа
	 * @returns {object}
	 */
	static getCollection(name, px_to_number = false) {
		const obj = {};

		for (const [key, value] of Object.entries(config)) {
			if (key.includes(name)) {
				obj[key.replace(`${name}-`, "")] = px_to_number
					? this.getNumber(value)
					: value;
			}
		}

		return obj;
	}

	/**
	 * Из стилевого значения превращает в число
	 *
	 * @param {string} param
	 * @returns {number}
	 */
	static getNumber(param) {
		return Number(param.replace("px", ""));
	}
}

export default StyleConfig;
