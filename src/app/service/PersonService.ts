import { Person } from "../model/Person";

type PersonId = string;

export class PersonService {

    private readonly person: Map<PersonId, Person> = new Map();

    public get keys(): string[] {
        return Array.from(this.person.keys());
    }

    public get entries(): [string, Person][] {
        return Array.from(this.person.entries());
    }

    public get values(): Person[] {
        return Array.from(this.person.values());
    }

    public get size(): number {
        return this.person.size;
    }

    public get iterableValues(): IterableIterator<Person> {
        return this.person.values();
    }

    public add(person: Person): void {
        if (this.person.has(person.id)) {
            throw new Error(`'${person.id}' person id already exists.`);
        }

        this.person.set(person.id, person);
    }

    public delete(personId: string): void {
        if (this.person.has(personId) === false) {
            throw new Error(`'${personId}' person id not found in the dictionary.`);
        }

        this.person.delete(personId);
    }

    public getPerson(personId: string): Person {
        const person = this.person.get(personId);

        if (person === undefined) {
            throw new Error(`'${personId}' person id not found in the dictionary.`);
        }

        return person;
    }

    public sort(): void {
        const persons = this.values.sort((a: Person, b: Person) => {
            if (a.firstName > b.firstName) {
                return 1;
            }

            if (a.firstName < b.firstName) {
                return -1;
            }

            return 0;
        });

        this.person.clear();

        for (const person of persons) {
            this.person.set(person.id, person);
        }
    }
}
