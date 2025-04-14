import { BASE_API } from "../../service/api";
import { useState } from "react";

function useFetchAPI() {

	const [isLoading, setIsLoading] = useState<boolean>(true);

	const response = () =>
            (fetch(BASE_API).then((response) => {
                if (response.ok) {
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 1.1 * 1000);
                    return response.json();
                }
            }));

	return [response, isLoading] as const;
}

export { useFetchAPI }