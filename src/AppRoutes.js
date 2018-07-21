export const routes = [
    {
        id : 'home',
        title : 'Home',
        to : '/',
        icon : 'home',
    },
    {
        id: 'training',
        title: 'Training',
        to : '/training',
        icon : 'manual',
    },
    {
        id : 'competition',
        title : 'Competition',
        to : '/competition',
        icon : 'crown',
    },
];

export const spesialRoutes = [

    {
        id : 'repository',
        title : 'Repository',
        type : 'problem_setter',
        route : {
            path : '/repository',
        },
        className : '2',
    },
];