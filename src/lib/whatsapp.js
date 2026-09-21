// Placeholder — add the business WhatsApp number here (digits only, with country code, e.g. '2348012345678')
export const WHATSAPP_NUMBER = '';

export const waLink = (message = '') => {
	const text = encodeURIComponent(message);
	return WHATSAPP_NUMBER
		? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
		: `https://api.whatsapp.com/send/?text=${text}`;
};
