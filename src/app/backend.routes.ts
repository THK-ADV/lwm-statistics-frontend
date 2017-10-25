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
        'all': '/patterns',
        'byId': '/patterns',
        'save': '/patterns',
        'details': '/patterns/details',
        'entries': {
            'save': '/resourceEntry'
        },
        'detailEntries': {
            'save': '/detailEntry'
        }
    }
};
