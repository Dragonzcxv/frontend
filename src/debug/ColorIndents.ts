import StyleConfig from "../libs/StyleConfig";

interface IndentElement {
	element: HTMLElement;
	parent: HTMLElement;
	class: string;
}

/**
 * Класс подцветки отступов
 */
class ColorIndents {
	document: HTMLElement | Document;
	indentsElements: Array<IndentElement> = [];
	indentsClasses: Array<string>;

	/**
	 *
	 * @param {HTMLElement | Document} document HTML элемент в пределах которого
	 * нужно красить отступы
	 */
	constructor(document: HTMLElement | Document) {
		this.indentsClasses = Object.values(StyleConfig.get().indents);
		this.document = document;
	}

	/**
	 * Инициализирует цветовые отступы у элементов с классами из indentsClasses
	 * @return { void }
	 */
	public init(): void {
		this.indentsClasses.forEach((indentClass) => {
			const elements: NodeListOf<HTMLElement> =
				this.document.querySelectorAll(`.${indentClass}`);

			elements.forEach((element) => {
				let posEl: number | null = null;
				const posElLeft = element.getBoundingClientRect().left;
				const indentElement: HTMLElement =
					document.createElement("div");
				indentElement.classList.add(`debug-${indentClass}`);

				if (element.parentNode) {
					element.parentNode.insertBefore(
						indentElement,
						element.nextSibling,
					);
				}

				if (indentClass.includes("bottom")) {
					posEl = element.offsetTop + element.offsetHeight;
				} else {
					posEl = element.offsetTop - indentElement.offsetHeight;
				}

				indentElement.style.width = `${element.offsetWidth}px`;
				indentElement.style.top = `${posEl}px`;
				indentElement.style.left = `${posElLeft}px`;

				this.indentsElements.push({
					element: indentElement,
					parent: element,
					class: indentClass,
				});
			});
		});

		// Вешаем эвент обновления позиций
		window.addEventListener("resize", () => {
			this.updatePosition();
		});
	}

	/**
	 * Обновляет позиции уже инициализированных блоков
	 * @return { void }
	 */
	protected updatePosition(): void {
		this.indentsElements.forEach((indent) => {
			let posEl: number | null = null;
			const posElLeft = indent.parent.getBoundingClientRect().left;

			if (indent.class.includes("bottom")) {
				posEl = indent.parent.offsetTop + indent.parent.offsetHeight;
			} else {
				posEl = indent.parent.offsetTop - indent.element.offsetHeight;
			}

			indent.element.style.width = `${indent.parent.offsetWidth}px`;
			indent.element.style.top = `${posEl}px`;
			indent.element.style.left = `${posElLeft}px`;
		});
	}
}

export default ColorIndents;
