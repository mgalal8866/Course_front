export const navLinks = [
    {
        title: 'nav.home',
        hasDropdown: false,
        route: '/home'
    },
    {
        title: 'nav.courses',
        hasDropdown: true,
        route: '/courses'
    },
    {
        title: 'nav.level_test',
        hasDropdown: false,
        route: '/level-test'
    },
    {
        title: 'nav.competitions',
        hasDropdown: false,
        route: '/competitions'
    },
    {
        title: 'nav.free_services.title',
        hasDropdown: true,
        reference: "freeServices",
        navItems: [
            {
                title: "nav.free_services.item_1",
                route: "free-services/general-abilities"
            },
            {
                title: "nav.free_services.item_2",
                route: "free-services/study-plan"
            },
            {
                title: "nav.free_services.item_3",
                route: "free-services/percentage"
            }
        ]
    },
    {
        title: 'nav.join_marketers_team',
        hasDropdown: false
    },
]