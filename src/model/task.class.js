export class Task {
    name = '';
    lastname = '';
    email = '';
    mode = false;

    constructor(name, lastname, email, mode){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.mode = mode;
    }
}