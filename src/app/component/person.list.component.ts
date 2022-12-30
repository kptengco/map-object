import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Person } from "../model/Person";
import { PersonService } from "../service/PersonService";

@Component({
    selector: "person-list-component",
    templateUrl: "./person.list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonListComponent implements OnInit {

    private readonly personService: PersonService = new PersonService();

    public get persons(): IterableIterator<Person> {
        return this.personService.iterableValues;
    }

    public ngOnInit(): void {
        let person = new Person();
        person.id = "6043cac2-28ce-4203-bd27-b02b4a2cc2d0";
        person.firstName = "Barry";
        person.lastName = "Doe";

        this.personService.add(person);

        person = new Person();
        person.id = "6043cac2-28ce-4203-bd27-b02b4a2cc2d1";
        person.firstName = "John";
        person.lastName = "Doe";

        this.personService.add(person);

        person = new Person();
        person.id = "6043cac2-28ce-4203-bd27-b02b4a2cc2d2";
        person.firstName = "Jane";
        person.lastName = "Doe";

        this.personService.add(person);

        person = new Person();
        person.id = "6043cac2-28ce-4203-bd27-b02b4a2cc2d3";
        person.firstName = "Apple";
        person.lastName = "Doe";

        this.personService.add(person);

        this.personService.sort();
    }
}
