"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfessions = exports.personToString = exports.isFulltimeEmployee = exports.introducePerson = exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["FullTime"] = 0] = "FullTime";
    Status[Status["Temporary"] = 1] = "Temporary";
})(Status || (exports.Status = Status = {}));
const introducePerson = (person) => { var _a, _b, _c, _d, _e, _f; return `Hello ${(_b = (_a = person === null || person === void 0 ? void 0 : person.name) === null || _a === void 0 ? void 0 : _a.first) !== null && _b !== void 0 ? _b : "FirstDefault"} ${(_d = (_c = person === null || person === void 0 ? void 0 : person.name) === null || _c === void 0 ? void 0 : _c.middle) !== null && _d !== void 0 ? _d : " # "} ${(_f = (_e = person === null || person === void 0 ? void 0 : person.name) === null || _e === void 0 ? void 0 : _e.last) !== null && _f !== void 0 ? _f : "LastDefault"}`; };
exports.introducePerson = introducePerson;
const isFulltimeEmployee = (person) => person.status === Status.FullTime;
exports.isFulltimeEmployee = isFulltimeEmployee;
const personToString = (person = {
    status: Status.FullTime,
    name: {
        first: "unknown",
        last: "unknown",
    },
    profession: "unknown",
}) => JSON.stringify(person, null, 2);
exports.personToString = personToString;
const getProfessions = (personMap) => Object.values(personMap)
    .map(({ profession }) => profession)
    .join("\n");
exports.getProfessions = getProfessions;
//# sourceMappingURL=objects.js.map