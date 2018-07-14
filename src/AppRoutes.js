export const routes = [
    {
        id: 'home',
        title: 'Home',
        route: {
            path: '/'
        },
    },
    {
        id: 'competition',
        title: 'Competition',
        route: {
            path: '/competition'
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
        id : 'repository',
        title : 'Repository',
        type : 'problem_setter',
        route : {
            path : '/repository',
        },
        className : '2',
    },
    {
        id : 'contest',
        title : 'Contest Admin',
        type : 'contest_maker',
        route : {
            path : '/contest',
        },
        className : '3',
    },
];