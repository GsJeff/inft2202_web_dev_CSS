"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfessions = exports.personToString = exports.isFulltimeEmployee = exports.introducePerson = exports.Temporary = exports.FullTime = void 0;
const FullTime = "FullTime";
exports.FullTime = FullTime;
const Temporary = "Temporary";
exports.Temporary = Temporary;
const introducePerson = (person) => { var _a; return `Hello ${person.name.first} ${(_a = person.name.middle) !== null && _a !== void 0 ? _a : ""} ${person.name.last}`; };
exports.introducePerson = introducePerson;
const isFulltimeEmployee = (person) => person.status === FullTime;
exports.isFulltimeEmployee = isFulltimeEmployee;
const personToString = (person = {
    status: FullTime,
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