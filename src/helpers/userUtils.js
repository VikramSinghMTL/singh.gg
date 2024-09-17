// Put your computations here.

function userComputed(data) {
	return {
		navLinks: [
			{ name: 'Pedagogy', path: '/pedagogy' },
			{ name: 'Software', path: '/software' },
			{ name: 'Works', path: '/works' },
			{ name: 'Now', path: '/now' },
		],
	};
}

exports.userComputed = userComputed;
