import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import courseReducer from '../reducers/courseReducer';

const courses = [
    { id: 1, name: 'Course 1', credit: 60 },
    { id: 2, name: 'Course 2', credit: 40 },
    { id: 3, name: 'Course 3', credit: 20 },
];

describe('Default state', () => {
    it('Test that the default state returns an empty array', () => {
        const initialState = [];
        const newState = courseReducer(initialState, { type: 'UNKNOWN'});
        expect(newState).toEqual(initialState);

    });
    it('FETCH_COURSE_SUCCESS returns the data passed', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: courses,
        };
        const expectedState = courses.map(course => ({ ...course, isSelected: false}));
        const state = courseReducer(undefined, action);
        expect(state).toEqual(expectedState);
    });
    it('SELECT_COURSE returns the data with the right item updated', () => {
        const initialState = courses.map(course => ({ ...course, isSelected: false}));
        const action = {
            type: SELECT_COURSE,
            index: 2,
        };
        const state = courseReducer(initialState, action);
        const expectedState = initialState.map(course => {
            if (course.id === 2) {
                return { ...course, isSelected: true };
            }
            return course;
        });
        expect(state).toEqual(expectedState);
    });
    it('UNSELECT_COURSE returns the data with the right item updated', () => {
        const initialState = courses.map(course => ({
            ...course,
            isSelected: course.id === 2
        }));
        const action = {
            type: UNSELECT_COURSE,
            index: 2,
        };
        const state = courseReducer(initialState, action);
        const expectedState = initialState.map(course => {
            if (course.id === 2) {
                return { ...course, isSelected: false };
            };
            return course;
        });
        expect(state).toEqual(expectedState);
    });
});