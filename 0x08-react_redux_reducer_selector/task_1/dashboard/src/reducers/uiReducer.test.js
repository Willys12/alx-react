import uiReducer from './uiReducer';
import { Map } from 'immutable'; 
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer test', () => {
    it('returns initial state when no action is passed', () => {
        const result = uiReducer(undefined, {});
        expect(result.toJS()).toEqual({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        });
    });
    it('returns initial state when action SELECT_COURSE is passed', () => {
        const action = {
            type: 'SELECT_COURSE'
        };
        const result = uiReducer(undefined, action);
        expect(result.toJS()).toEqual({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        });
    });
    it('when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible', () => {
        const action = { type: 'DISPLAY_NOTIFICATION_DRAWER' }
        const result = uiReducer(undefined, action);
        expect(result.toJS()).toEqual({
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: {}
        });
    });
});