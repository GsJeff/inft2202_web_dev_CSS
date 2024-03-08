const FullTime = "FullTime" as const;
const Temporary = "Temporary" as const;

export { FullTime, Temporary };

export const introducePerson = (person: {
  name: {
    first: string;
    middle?: string;
    last: string;
  };
}) =>
  `Hello ${person.name.first} ${person.name.middle ?? ""} ${person.name.last}`;

export const isFulltimeEmployee = (person: { status: typeof FullTime }) =>
  person.status === FullTime;

export const personToString = (
  person: {
    status?: typeof FullTime;
    name?: {
      first: string;
      last: string;
    };
    profession?: string;
  } = {
    status: FullTime,
    name: {
      first: "unknown",
      last: "unknown",
    },
    profession: "unknown",
  }
) => JSON.stringify(person, null, 2);

export const getProfessions = (personMap: Record<string, { profession: string }>) =>
  Object.values(personMap)
    .map(({ profession }) => profession)
    .join("\n");