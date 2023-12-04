export class Student {
    constructor(
        public id: number,
        public name: string,
        public lastname: string,
        public phone: string,
        public gender: string,
        public email: string,
        public password: string,
        public institution_id: number,
        public career_id: number,
        public securityQuestion: number,
        public securityAnswer: string,
        public url_img: string,
    ) { }
}

export class StudentInformation {
    constructor(
        public name: string,
        public lastname: string,
        public phone: string,
        public gender: string,
        public email: string,
        public institution_id: string,
        public career_id: string,
        public url_img: string
    ) { }
}

export class StudentLogin {
    constructor(
        public id: number,
        public name: string,
        public lastname: string,
        public phone: string,
        public gender: string,
        public email: string,
        public institution_id: number,
        public career_id: number,
        public url_img: string,
        public token: string
    ) { }
}

export class securityInformation {
    constructor(
        public securityQuestion: number,
        public securityAnswer: string
    ) { }
}