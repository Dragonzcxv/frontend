import "normalize.css";
import "styles/layout/base.scss";
import Registration from "../base/Registration";
import "../blocks/common/Example/Example";

(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", () => {
        Registration.blocksInit();
    });
})();
