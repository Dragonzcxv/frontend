const prettier = require("prettier");
const fs = require('fs');
const path = require('path');

module.exports = function (content, map, meta) {
    const callback = this.async();

    loader(content, this.resourcePath, function(content) {
        callback(null, content, map, meta);
    });
};

async function loader(content, resourcePath, callback) {
    const options = await prettier.resolveConfig(path.resolve(resourcePath));

    prettier.format(content, options).then((result) => {
        if (content !== result) {
            fs.writeFile(resourcePath, result, (error) => {
                if (error) {
                    throw new Error(error);
                } else {
                    callback(result)
                }
            });
        } else {
            callback(content);
        }
    });
}
