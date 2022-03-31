const httpRequest = (url, conf = {}) => {
	if (conf.method && conf.method.toUpperCase() === "GET" && conf.body) {
		//GET request can't hold a body
		delete conf.body;
	}
	let res;
	return fetch(url, conf)
		.then((respone) => {
			res = respone;
			//If the status code represents an error state 400-500 range, don't return the data
			if (!respone.ok) {
				//Read the error message and the status code
				const statusCode = respone.status;
				let errorMessage = "";
				//Return the rejected promise to catch it
				return respone.json().then((error) => {
					//Some responses don't have an error message, so create one
					if (!error || (error && Object.keys(error).length === 0)) {
						errorMessage = `Error from the client side, check the status code: ${statusCode}`;
					} else {
						errorMessage = `${error}, the status code: ${statusCode}`;
					}
					throw new Error(errorMessage);
				});
			}

			//Return a promise with a snapshot of the data stream
			return respone.json();
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
