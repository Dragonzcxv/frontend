const settings = require("../user.settings");
const path = require("path");

module.exports = {
	PublicPath: function(env) {
		env = env || "prod";

		return this.BuildPath(env).replace(path.resolve(settings.docRoot), "");
	},
	BuildPath: function(env) {
		env = env || "prod";

		return path.resolve(settings.buildPath, env) + "/";
	},
};
