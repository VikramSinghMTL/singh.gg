// Put your computations here.

function userComputed(data) {
	return {
		navLinks: [
			{ name: 'Fleeting', path: '/fleeting-notes' },
			{ name: 'Literature', path: '/literature-notes' },
			{ name: 'Permanent', path: '/permanent-notes' },
			{ name: 'Now', path: '/now' },
		],
	};
}

exports.userComputed = userComputed;
