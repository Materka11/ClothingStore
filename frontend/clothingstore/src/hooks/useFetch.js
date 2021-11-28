import { useEffect, useState } from 'react';

function useFetch(url) {
	const [ data, setData ] = useState(null);
	const [ error, setError ] = useState(null);
	const [ loading, setloading ] = useState(true);

	useEffect(
		() => {
			const fetchData = async () => {
				setloading(true);

				try {
					const res = await fetch(url);
					const json = await res.json();

					setData(json);
					setloading(false);
				} catch (error) {
					setError(error);
					setloading(false);
				}
			};
			fetchData();
		},
		[ url ]
	);

	return { loading, error, data };
}

export default useFetch;
