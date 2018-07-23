import { selectToken } from '../../../../../../../../modules/redux/session';

export const problemListActions = {
    fetchProblemList: () => {
        return async ()=> {
            const token = selectToken();
            return false;
        }
    }
};