module.exports = class User {
    constructor (firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        //creating login id with first letter of firstname and lastname full
        this.login = (firstName[0]+lastName).toLowerCase();

    }

    describe(){
        return `${this.firstName} ${this.lastName} (login: ${this.login})`;
    }
}