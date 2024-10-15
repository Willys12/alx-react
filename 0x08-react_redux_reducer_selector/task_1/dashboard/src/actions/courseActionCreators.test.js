import { selectCourse, unselectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("tests for the action creators", () => {
    it("should return correct action payload", () => {
        expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
    });
    it("should return correct action payload & type when unselectCourse is called", () => {
        expect(unselectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
    });
});