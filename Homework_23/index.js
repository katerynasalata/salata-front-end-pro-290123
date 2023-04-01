class Student {
    attendanceRecords = [];

    constructor(name, lastname, year, grades) {
        this.name = name;
        this.lastname = lastname;
        this.year = year;
        this.grades = grades;
    }

    get age() {
        return 2023 - this.year;
    }

    get gradeAverage() {
        const sumGrades = this.grades.reduce((a, b) => a + b);
        return sumGrades/this.grades.length;
    }

    present() {
        if (this.attendanceRecords.length < 25) {
            this.attendanceRecords.push(true); 
        } else {
            console.log('You have only 25 lessons');
        }
    }

    absent() {
        if (this.attendanceRecords.length < 25) {
            this.attendanceRecords.push(false); 
        } else {
            console.log('You have only 25 lessons');
        }
    }

    get attendancePercentage() {
        return this.attendanceRecords.filter(
            attendance => attendance === true
            ).length / this.attendanceRecords.length;
    }

    summary() {
        if (this.gradeAverage > 90 && this.attendancePercentage > 0.9) {
            return 'Молодець!';
        } else if (this.gradeAverage > 90 || this.attendancePercentage > 0.9) {
            return 'Добре, але можна краще';
        } else {
            return 'Редиска!';
        }
    }
}

const student1 = new Student('Саша', 'Коваленко', 1994, [100, 98, 80, 97]);
const student2 = new Student('Маша', 'Гнатенко', 1992, [89, 88, 95, 100]);
const student3 = new Student('Паша', 'Влаєв', 2002, [78, 88, 96, 90]);

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

student2.absent();
student2.absent();
student2.present();
student2.present();

student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();

console.log(student1.gradeAverage);
console.log(student1.age);
console.log(student1.attendancePercentage);
console.log(student1.summary());

console.log(student2.gradeAverage);
console.log(student2.age);
console.log(student2.summary());

console.log(student3.age);
console.log(student3.attendancePercentage);
console.log(student3.summary());