module.exports = {
    docRoot: "../",
    buildPath: "../builds",
    entry: {
        base: "./src/entry/base.js",
        test: {
            dependOn: "base",
            import: "./src/entry/pages/test.js",
        },
    },
};
