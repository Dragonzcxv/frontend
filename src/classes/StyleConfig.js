import config from "styles/export.module.scss";

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
                min: this.getNumber(config["site-breakpoints-min"]),
                mobile: this.getNumber(config["site-breakpoints-mobile"]),
                mobile2: this.getNumber(config["site-breakpoints-mobile2"]),
                middle: this.getNumber(config["site-breakpoints-middle"]),
                middle2: this.getNumber(config["site-breakpoints-middle2"]),
                middle3: this.getNumber(config["site-breakpoints-middle3"]),
                full: this.getNumber(config["site-breakpoints-full"]),
            },
            gutterSize: {
                overMin: this.getNumber(config["gutter-size-over-min"]),
                min: this.getNumber(config["gutter-size-min"]),
                mobile: this.getNumber(config["gutter-size-mobile"]),
                mobile2: this.getNumber(config["gutter-size-mobile2"]),
                middle: this.getNumber(config["gutter-size-middle"]),
                middle2: this.getNumber(config["gutter-size-middle2"]),
                middle3: this.getNumber(config["gutter-size-middle3"]),
                full: this.getNumber(config["gutter-size-full"]),
            },
            extraBreakpoints: {
                extraMobile: this.getNumber(config["breakpoints-width-extra-mobile"]),
                extraMiddle: this.getNumber(config["breakpoints-width-extra-middle"]),
            },
        }
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