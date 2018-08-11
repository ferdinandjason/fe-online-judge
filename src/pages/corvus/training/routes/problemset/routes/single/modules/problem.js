import {selectToken} from '../../../../../../../../modules/redux/session';

export const problemActions = {
    fetchProblem: (problemId) => {
        return async (problemId) => {
            const token = selectToken();
            console.log(token);
            return false;
        }
    },
    fetchProblemRank: (problemId) => {
        return async (problemId) => {
            const token = selectToken();
            console.log(token);
            return false;
        }
    }
};