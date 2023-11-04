import Block from "./Block";

/**
 *  Класс для регистрации блоков
 */
class Registration {
    private static _blocks: Array<{ name: string, class: typeof Block }> = [];

    /**
     *  Создаёт объекты зарегистрированных блоков и вызывает onInit
     */
    public static blocksInit() {
        this._blocks.forEach((block) => {
            const elements = document.querySelectorAll(`.${block.name}`);

            if (elements.length > 0) {
                elements.forEach(elem => {
                    new block.class(elem).onInit();
                });
            }
        });
    }

    /**
     * Регистрирует класс в статической	переменной
     *
     * @param { Block } instance - класс, наследованный от класса Block
     */
    public static register(instance: typeof Block) {
        this._blocks.push({
            name: instance.blockName,
            class: instance
        });
    }
}

export default Registration;
