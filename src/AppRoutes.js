export const routes = [
    {
        id: 'home',
        title: 'Home',
        to: '/',
        icon: 'home',
    },
    {
        id: 'training',
        title: 'Training',
        to: '/training',
        icon: 'e-learning',
    },
    {
        id: 'competition',
        title: 'Competition',
        to: '/competition',
        icon: 'prize',
    },
    {
        id: 'repository',
        title: 'Repository',
        to: '/repository',
        icon: 'data-configuration',
    },
];

export const spesialRoutes = [

    {
        id: 'repository',
        title: 'Repository',
        type: 'problem_setter',
        route: {
            path: '/repository',
        },
        className: '2',
    },
];