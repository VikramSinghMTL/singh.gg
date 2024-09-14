// Put your computations here.

function userComputed(data) {
	return {
		navLinks: [
			{ name: 'About', path: '/about' },
			{ name: 'Contact', path: '/contact' },
			{ name: 'Now', path: '/now' },
		],
	};
}

exports.userComputed = userComputed;
