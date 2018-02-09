export class LoginModel {
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public emailAddress: string,
        public shortName?: string
    ) {

    }
}
