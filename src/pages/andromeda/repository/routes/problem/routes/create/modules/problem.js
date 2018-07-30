import {API} from "../../../../../../../../modules/api";

export const problemRepositoryCreateActions = {
    createProblemRepository: (data) => {
        return async () => {
            API.problemAPI.create(data)
                .then((response) => {
                    console.log(response);
                    return response.data;
                });
        }
    }
};