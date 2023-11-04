import Block from "../../../base/Block";
import Registration from "../../../base/Registration";
// import StyleConfig from "../../../classes/StyleConfig";
import "./Example.scss";

class Example extends Block {
    static get blockName() {
        return "b-example";
    }

    onInit() {
        // console.log(this, StyleConfig.get());
    }
}

Registration.register(Example);

export default Example;
