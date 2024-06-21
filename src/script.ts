/* The above TypeScript code defines interfaces and classes for participants, courses, and companies,
allowing participants to enroll in courses and companies to offer positions based on participant
qualifications. */
interface IParticipant {
  name: string;
  lastName: string;
  country: string;
  levelOfEducation: string;
  languageSkills: string;
  trainingField: string;
  interests: string;

  enrollCourse(course: ICourse): void;
}
interface ICourse {
  courseTitle: string;
  description: string;
  professionalSector: string;
  duration: number;
  registeredList: IParticipant[];
  addParticipant(participant: IParticipant): void;
}
interface ICompany {
  companyName: string;
  activitySector: string;
  description: string;
  openPositions: string[];
  offerPosition(participant: IParticipant, position: string): void;
}
class Participant implements IParticipant {
  name: string;
  lastName: string;
  country: string;
  levelOfEducation: string;
  languageSkills: string;
  trainingField: string;
  interests: string;

  constructor(
    name: string,
    lastName: string,
    country: string,
    levelOfEducation: string,
    languageSkills: string,
    trainingField: string,
    interests: string
  ) {
    this.name = name;
    this.lastName = lastName;
    this.country = country;
    this.levelOfEducation = levelOfEducation;
    this.languageSkills = languageSkills;
    this.trainingField = trainingField;
    this.interests = interests;
  }

  enrollCourse(course: ICourse): void {
    course.addParticipant(this);
  }
}

class Course implements ICourse {
  courseTitle: string;
  description: string;
  professionalSector: string;
  duration: number;
  registeredList: IParticipant[];
  constructor(
    courseTitle: string,
    description: string,
    professionalSector: string,
    duration: number,
    registeredList: IParticipant[]
  ) {
    this.courseTitle = courseTitle;
    this.description = description;
    this.professionalSector = professionalSector;
    this.duration = duration;
    this.registeredList = registeredList;
  }
  addParticipant(participant: IParticipant): void {
    this.registeredList.push(participant);
  }
}

class Company implements ICompany {
  companyName: string;
  activitySector: string;
  description: string;
  openPositions: string[];
  constructor(
    companyName: string,
    activitySector: string,
    description: string,
    openPositions: string[]
  ) {
    this.companyName = companyName;
    this.activitySector = activitySector;
    this.description = description;
    this.openPositions = openPositions;
  }
  offerPosition(participant: IParticipant, position: string): void {
    let newArr = this.openPositions.map((x) =>
      x.toLowerCase().trim().replace(/[-\s]/g, " ")
    );
    if (newArr.includes(position)) {
      console.log(
        `${participant.name} ${participant.lastName} has applied for the position of ${position}`
      );
      if (
        participant.trainingField
          .toLowerCase()
          .trim()
          .replace(/[-\s]/g, " ") ===
        position.toLowerCase().trim().replace(/[-\s]/g, " ")
      ) {
        console.log(
          `The candidate ${participant.name} ${participant.lastName} is suitable for the position of ${position}. `
        );
      } else {
        console.log(`The candidate is not suitable.`);
      }
    } else {
      console.log(`The position: ${position} is not available`);
    }
  }
}
const developer = new Course(
  "Front end",
  "Complete course on front-end developing",
  "computer science",
  200,
  []
);
const uxDesigner = new Course(
  "Ux-designer",
  "UI-UX designer course",
  "Graphics",
  200,
  []
);
const projectManager = new Course(
  "Project Manager",
  "Course for project manager",
  "Marketing",
  250,
  []
);
console.log(developer, uxDesigner, projectManager);

const nila = new Participant(
  "Nila",
  "Chok",
  "India",
  "Technical Diploma",
  "excellent",
  "front-end",
  "coding"
);
const salvador = new Participant(
  "Salvador",
  "Morales",
  "Costa Rica",
  "Phd",
  "Excellent",
  "Finance",
  "Marketing"
);
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
