import { useEffect } from 'react';

const useDocumentTitle = (title: string) => {
	useEffect(() => {
		if (title) {
			document.title = `${title} | VATUSA`;
		} else {
			document.title = 'VATUSA';
		}
	}, [title]);
};

export default useDocumentTitle;
