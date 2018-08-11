import {API} from "../../../../../../../../modules/api";

export const problemRepositoryActions = {
    fetchProblem: (problemId) => {
        return async () => {
            return API.problemAPI.show(problemId)
                .then((response) => {
                    console.log(response);
                    const problem = response.data.data;
                    return Promise.resolve(problem);
                });
        }
    }
};