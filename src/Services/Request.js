const Request = {
    server: "http://localhost:8080/",

    getStudents() {
        return fetch(this.server + "students/").then(res => res.json());
    },

    getCourseType() {
        return fetch(this.server + "journals/").then(res => res.json());
    },

    getCourseMark() {
        return fetch(this.server + "journals/").then(res => res.json());
    },

    getGroups() {
        return fetch(this.server + "groups/").then(res => res.json());
    },

    transferStudent() {
        return fetch(this.server + "groups/").then(res => res.json());
    }
};
export default Request