declare module "StyleConfig" {
    export default class StyleConfig {
        public static get(): {
            siteBreakpoints: {
                min: number;
                table: number;
                middle: number;
                big: number;
                full: number;
            };
            gutterSize: {
                overMin: number;
                mobile: number;
                table: number;
                middle: number;
                big: number;
                full: number;
            };
        };

        protected static getNumber(param: string): number;
    }
}

export default StyleConfig;
