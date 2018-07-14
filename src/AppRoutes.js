export const routes = [
    {
        id: 'home',
        title: 'Home',
        route: {
            path: '/'
        },
    },
    {
        id: 'training',
        title: 'Training',
        route: {
            path: '/training'
        },
    },
];

export const spesialRoutes = [
    {
        id : 'competition',
        title : 'Competition',
        type : 'contest_maker',
        route : {
            path : '/competition',
        },
        className : '3',
    },
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