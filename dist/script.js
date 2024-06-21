"use strict";
class Participant {
    constructor(name, lastName, country, levelOfEducation, languageSkills, trainingField, interests) {
        this.name = name;
        this.lastName = lastName;
        this.country = country;
        this.levelOfEducation = levelOfEducation;
        this.languageSkills = languageSkills;
        this.trainingField = trainingField;
        this.interests = interests;
    }
    enrollCourse(course) {
        course.addParticipant(this);
    }
}
class Course {
    constructor(courseTitle, description, professionalSector, duration, registeredList) {
        this.courseTitle = courseTitle;
        this.description = description;
        this.professionalSector = professionalSector;
        this.duration = duration;
        this.registeredList = registeredList;
    }
    addParticipant(participant) {
        this.registeredList.push(participant);
    }
}
class Company {
    constructor(companyName, activitySector, description, openPositions) {
        this.companyName = companyName;
        this.activitySector = activitySector;
        this.description = description;
        this.openPositions = openPositions;
    }
    offerPosition(participant, position) {
        let newArr = this.openPositions.map((x) => x.toLowerCase().trim().replace(/[-\s]/g, " "));
        if (newArr.includes(position)) {
            console.log(`${participant.name} ${participant.lastName} has applied for the position of ${position}`);
            if (participant.trainingField
                .toLowerCase()
                .trim()
                .replace(/[-\s]/g, " ") ===
                position.toLowerCase().trim().replace(/[-\s]/g, " ")) {
                console.log(`The candidate ${participant.name} ${participant.lastName} is suitable for the position of ${position}. `);
            }
            else {
                console.log(`The candidate is not suitable.`);
            }
        }
        else {
            console.log(`The position: ${position} is not available`);
        }
    }
}
const developer = new Course("Front end", "Complete course on front-end developing", "computer science", 200, []);
const uxDesigner = new Course("Ux-designer", "UI-UX designer course", "Graphics", 200, []);
const projectManager = new Course("Project Manager", "Course for project manager", "Marketing", 250, []);
console.log(developer, uxDesigner, projectManager);
const nila = new Participant("Nila", "Chok", "India", "Technical Diploma", "excellent", "front-end", "coding");
const salvador = new Participant("Salvador", "Morales", "Costa Rica", "Phd", "Excellent", "Finance", "Marketing");
console.log(nila, salvador);
nila.enrollCourse(developer);
salvador.enrollCourse(projectManager);
console.log(developer, projectManager);
const glovo = new Company("Glovo", "food delivery", "food delivery company", [
    "ux designer",
    "front-end",
    "delivery boy",
]);
const adidas = new Company("Adidas", "Fashion", "Clothing Company", [
    "back-end",
    "front-end",
    "ux designer",
]);
glovo.offerPosition(nila, "back-end");
adidas.offerPosition(salvador, "front end");
