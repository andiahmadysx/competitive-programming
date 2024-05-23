function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38) {
            return grade;
        }
        const roundedGrade = Math.ceil(grade / 5) * 5;
        return (roundedGrade - grade < 3) ? roundedGrade : grade;
    });
}

console.log(gradingStudents([73, 67, 38, 33]))