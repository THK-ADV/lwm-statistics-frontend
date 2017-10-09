/**
 * Created by Florian on 28.08.2017.
 */

export const backendHost = 'http://localhost:9000';

export const backendRoutes = {
    'statistics' : {
        'all': '/statistics',
        'byResource': '/statistics',
    },
    'resources' : {
        'all': '/resources',
        'byId': '/resources',
        'save': '/resources',
        'details': '/resources/details',
        'entries': {
            'save': '/resourceEntry'
        },
        'detailEntries': {
            'save': '/detailEntry'
        }
    }
};
