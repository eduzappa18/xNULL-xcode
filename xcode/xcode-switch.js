if (!localStorage.getItem("xcode_theme")) {
	localStorage.setItem("xcode_theme", "light");
}

const light_theme = document.querySelector("#light_theme");
const dark_theme = document.querySelector("#dark_theme");
light_theme.disabled = true;
dark_theme.disabled = true;

document.addEventListener("DOMContentLoaded", function() {
	const blocks = document.querySelectorAll("pre.line-numbers");
	let wrapper, div, input, label;
	for (const block of blocks) {
		wrapper = document.createElement("div");
		wrapper.setAttribute("class", "xcode_container");

		div = document.createElement("div");
		div.setAttribute("class", "input-container");
		div.setAttribute("title", "Toggle Color Theme");

		input = document.createElement("input");
		input.setAttribute("id", "darkTheme");
		input.setAttribute("class", "xcode_switch");
		input.setAttribute("type", "checkbox");
		input.addEventListener("change", themeSwitch, false);

		label = document.createElement("label");
		label.setAttribute("class", "xcode_switch");
		label.setAttribute("for", "darkTheme");

		block.parentNode.insertBefore(wrapper, block);
		div.append(input);
		div.append(label);
		wrapper.append(block);
		wrapper.append(div);
	}

	if (localStorage.getItem("xcode_theme") == "dark") {
		toggleSwitch(true);
		toggleTheme("dark");
	} else if (localStorage.getItem("xcode_theme") == "light") {
		toggleSwitch(false);
		toggleTheme("light");
	}

	function themeSwitch() {
		if (this.checked) {
			toggleSwitch(true);
			toggleTheme("dark");
			localStorage.setItem("xcode_theme", "dark");
		} else {
			toggleSwitch(false);
			toggleTheme("light");
			localStorage.setItem("xcode_theme", "light");
		}
	}

	function toggleTheme(theme) {
		if (theme == "light") {
			light_theme.disabled = false;
			dark_theme.disabled = true;
		}
		if (theme == "dark") {
			dark_theme.disabled = false;
			light_theme.disabled = true;
		}
	}

	function toggleSwitch(value) {
		const inputs = document.querySelectorAll("input.xcode_switch");
		for (const input of inputs) {
			input.checked = value;
		}
	}
});