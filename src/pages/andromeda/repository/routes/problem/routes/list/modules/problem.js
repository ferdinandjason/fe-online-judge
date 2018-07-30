import {API} from "../../../../../../../../modules/api";

export const problemRepositoryListActions = {
    fetchProblemRepositoryList: (page,limit) => {
        return async () => {
            return API.problemAPI.list(page,limit)
                .then((response) => {
                    console.log(response);
                    const problems = response.data.problems;
                    return Promise.resolve(problems);
                });
        }
    }
};