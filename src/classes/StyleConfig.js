import config from "../styles/export.module.scss";

// TODO: Переработать на самособирающийся
// конфиг отталкиваясь от последовательности названий

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
            siteBreakpoints: {
                min: this.getNumber(config["site-breakpoints-mobile"]),
                table: this.getNumber(config["site-breakpoints-table"]),
                middle: this.getNumber(config["site-breakpoints-middle"]),
                big: this.getNumber(config["site-breakpoints-big"]),
                full: this.getNumber(config["site-breakpoints-full"]),
            },
            gutterSize: {
                overMin: this.getNumber(config["gutter-size-over-min"]),
                mobile: this.getNumber(config["gutter-size-mobile"]),
                table: this.getNumber(config["gutter-size-table"]),
                middle: this.getNumber(config["gutter-size-middle"]),
                big: this.getNumber(config["gutter-size-big"]),
                full: this.getNumber(config["gutter-size-full"]),
            },
        };
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
