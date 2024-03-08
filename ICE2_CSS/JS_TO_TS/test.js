"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = require("./objects");
const tauhid = {
    name: {
        first: "Mohammad",
        middle: "Tauhid",
        last: "Islam",
    },
    status: objects_1.Status.FullTime,
    profession: "Engineer and Professor",
};
console.log((0, objects_1.introducePerson)());
console.log((0, objects_1.introducePerson)(tauhid));
console.log((0, objects_1.isFulltimeEmployee)(tauhid));
console.log((0, objects_1.personToString)(tauhid));
console.log((0, objects_1.getProfessions)({
    1: tauhid,
}));
//# sourceMappingURL=test.js.map