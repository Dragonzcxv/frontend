import Block from "base/Block";
import StyleConfig from "../../../classes/StyleConfig";
import "./Test.scss";

class Test extends Block {
    static get blockName() {
        return "b-test";
    }

    onInit() {
        const it = this;
        const style_config = StyleConfig.get();

        console.log(it, style_config);
    }
}

Block.register(Test);

export default Test;