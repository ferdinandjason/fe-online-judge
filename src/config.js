let BASE_URL = 'http://localhost:8000';

export const APP_CONFIG = {
    name: 'OJ',
    platform: 'Nebula',
    apiURL: {
        auth: `${BASE_URL}/api/auth`,
        problem: `${BASE_URL}/api/problems`,
        submission: `${BASE_URL}/api/submissions`,
    }
};

export const MODE = [
    {title: 'C', mode: 'csharp'},
    {title: 'C++', mode: 'csharp'},
    {title: 'Java', mode: 'java'},
    {title: 'Javascript', mode: 'javascript'},
    {title: 'Python', mode: 'python'},
];

export const THEME = [
    {title: 'Github', theme: 'github'},
    {title: 'Monokai', theme: 'monokai'},
    {title: 'Tomorrow', theme: 'tomorrow'},
    {title: 'Kuroir', theme: 'kuroir'},
    {title: 'Twilight', theme: 'twilight'},
    {title: 'Xcode', theme: 'xcode'},
    {title: 'Textmate', theme: 'textmate'},
    {title: 'Terminal', theme: 'terminal'},
    {title: 'Solarized Dark', theme: 'solarized_dark'},
    {title: 'Solarized Light', theme: 'solarized_light'},
];