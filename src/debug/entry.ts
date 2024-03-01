import ColorIndents from "./ColorIndents";
import "entry.scss";

document.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		new ColorIndents(document).init();
	}, 500);
});
