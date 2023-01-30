import Block from "base/Block";
import variables from "styles/export.module.scss";
import "./Test.scss";

class Test extends Block {
	static get blockName() {
		return ".b-test";
	}

	onInit() {
		console.log(this);
		console.log(variables);
	}
}

Block.register(Test);

export default Test;