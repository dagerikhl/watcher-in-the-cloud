export class ElementEvent<T extends HTMLElement> extends Event {

    public target!: T;
    public currentTarget!: T;

}
