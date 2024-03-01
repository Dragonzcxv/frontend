import Block from "./Block";

/**
 *  Класс для регистрации блоков
 */
class Registration {
    private static _blocks: Array<{
        name: string;
        class: typeof Block;
        objects: Block[];
    }> = [];

    /**
     *  Создаёт объекты зарегистрированных блоков и вызывает onInit
     */
    public static blocksInit() {
        this._blocks.forEach((block) => {
            const elements: NodeListOf<HTMLElement> = document.querySelectorAll(
                `.${block.name}`,
            );
            if (elements.length > 0) {
                elements.forEach((elem) => {
                    let isExist = false;

                    // Проверяем наличие элемента, чтобы избежать повторной инициализации
                    block.objects.forEach((obj) => {
                        if (elem === obj.el) {
                            isExist = true;
                        }
                    });

                    if (!isExist) {
                        const newBlock = new block.class(elem);
                        block.objects.push(newBlock);
                        newBlock.onInit();
                    }
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
            class: instance,
            objects: [],
        });
    }

    /**
     * Метод, который по переданному HTMLElement отдает объект необходимого класса
     * @param { HTMLElement } block - html элемент
     * @returns { Block | null }
     */
    public static getBlock(block: HTMLElement): Block | null {
        for (const obj of this._blocks) {
            for (const ob of obj.objects) {
                if (ob.el == block) {
                    return ob;
                }
            }
        }

        return null;
    }
}

export default Registration;
