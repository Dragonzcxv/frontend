// Стили
import "normalize.css";
import "styles/layout/index";
// Блоки
// import "../blocks/site/Header/Header.js";

// Прочее
import Registration from "base/Registration";

(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
        // Инициализация фронтед блоков
        Registration.blocksInit();
    });
})();
