const data = {
	linkedin: {
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/reinny-almonte-ramos-b70312186/",
	},
	github: {
		name: "GitHub",
		link: "https://github.com/Jighdan",
	},
	whatsapp: {
		name: "WhatsApp",
		link: "https://api.whatsapp.com/send?phone=+18299122442",
	},
	twitter: {
		name: "Twitter",
		link: "https://twitter.com/jighdan",
	},
	email: {
		name: "Email",
		link: "mailto:reynsth@gmail.com",
	},
	resume: {
		name: "Resume",
		link: "#",
	},
};

export const state = () => ({
	profiles: [
		data.linkedin,
		data.github,
		data.whatsapp,
		data.twitter,
		data.email,
	],
	headerProfiles: [data.linkedin, data.github, data.resume],
});

export const getters = {
	getProfiles(state) {
		return state.profiles;
	},
	getHeaderProfiles(state) {
		return state.headerProfiles;
	},
};