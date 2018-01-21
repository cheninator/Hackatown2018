import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Ma ville',
        icon: 'nb-home',
        link: '/home',
        home: true,
    },
    {
        title: 'Garderie',
        icon: 'ion-ios-people',
        children: [
            {
                title: 'Rechercher une garderie',
                link: '/daycare',
            },
            {
                title: 'Mes garderies',
                link: '/daycare/my',
            }
        ],
    },
    {
        title: 'Activités sportives',
        icon: 'ion-ios-basketball',
        children: [
            {
                title: 'Rechercher une activité',
                link: '/sports',
            },
            {
                title: 'Mes inscriptions',
                link: '/sports/my',
            }
        ],
    },
    {
        title: 'Services de garde',
        icon: 'ion-university',
        children: [
            {
                title: 'Rechercher',
                link: '/auth/login',
            },
            {
                title: 'Mes inscriptions',
                link: '/auth/register',
            }
        ],
    },
    {
        title: 'Alertes routieres',
        icon: 'ion-ios-people',
        children: [
            {
                title: 'Alerter routieres',
                link: '/alerts',
            }
        ],
    },
    {
        title: 'Règlages',
        icon: 'ion-gear-b',
        children: [
            {
                title: 'Gérer mes paiements',
                link: '/auth/login',
            }
        ],
    },
];
