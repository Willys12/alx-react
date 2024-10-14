import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer test', () => {
    it('returns initial state when no action is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        }
        const result = uiReducer(undefined, {});
        expect(result).toEqual(initialState);
    });
    it('returns initial state when action SELECT_COURSE is passed', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        }
        const action = {
            type: 'SELECT_COURSE'
        };
        const result = uiReducer(undefined, action);
        expect(result).toEqual(initialState);
    });
    it('when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible', () => {
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };
        
        const action = { type: 'DISPLAY_NOTIFICATION_DRAWER' }
        const result = uiReducer(undefined, action);
        expect(result).toEqual({
            ...initialState,
            isNotificationDrawerVisible: true
        });
    });
});