export const getMessageForStatus: Map<string, string> = new Map([
	['200', 'OK'],
	['201', 'Created'],
	['202', 'Accepted'],
	['203', 'Non-Authoritative Information'],
	['204', 'No Content'],
	['205', 'Reset Content'],
	['206', 'Partial Content'],
	['300', 'Multiple Choices'],
	['301', 'Moved Permanently'],
	['302', 'Found'],
	['303', 'See Other'],
	['304', 'Not Modified'],
	['305', 'Use Proxy'],
	['306', 'Unused'],
	['307', 'Temporary Redirect'],
	['400', 'Bad Request'],
	['401', 'Unauthorized'],
	['402', 'Payment Required'],
	['403', 'Forbidden'],
	['404', 'Not Found'],
	['405', 'Method Not Allowed'],
	['406', 'Not Acceptable'],
	['407', 'Proxy Authentication Required'],
	['408', 'Request Timeout'],
	['409', 'Conflict'],
	['410', 'Gone'],
	['411', 'Length Required'],
	['412', 'Precondition Failed'],
	['413', 'Payload Too Large'],
	['414', 'URI Too Long'],
	['415', 'Unsupported Media Type'],
	['416', 'Range Not Satisfiable'],
	['417', 'Expectation Failed'],
	['418', 'I\'m a teapot'],
	['429', 'Too Many Requests'],
	['500', 'Internal Server Error'],
	['501', 'Not Implemented'],
	['502', 'Bad Gateway'],
	['503', 'Service Unavailable'],
	['504', 'Gateway Timeout'],
	['505', 'HTTP Version Not Supported']
]);

export function get_status_colour(status: number): string {
	if (between(status, 200, 299)) {
		return 'variant-filled-success';
	} else if (between(status, 300, 399)) {
		return "variant-filled-surface";
	} else if (between(status, 400, 499 )) {
		return "variant-filled-warning"
	} else {
		return "variant-filled-primary"
	}
}

function between(num: number, l: number, r: number): boolean {
	return num >= l && num <= r;

}