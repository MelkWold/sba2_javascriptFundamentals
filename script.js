// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // console.log("Course Info", CourseInfo);
    // console.log("Assignment Group", AssignmentGroup);
    // console.log("Learner Submission", LearnerSubmissions);


    // const result = [
    //     {
    //       id: 125,
    //       avg: 0.985, // (47 + 150) / (50 + 150)
    //       1: 0.94, // 47 / 50
    //       2: 1.0 // 150 / 150
    //     },
    //     {
    //       id: 132,
    //       avg: 0.82, // (39 + 125) / (50 + 150)
    //       1: 0.78, // 39 / 50
    //       2: 0.833 // late: (140 - 15) / 150
    //     }
    //   ];
  
    // return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  //console.log(result);
  
// ==============================Thinking Pad =======================================
// Step 1: get the relevant data and define variables
 // 1.1. Get the relevant scores for each assignment from LearneSubmissions using assignment_id keywords

// =========== getScores function =======================================       
function getScores (learnerId, assignmentId){
    for (i = 0; i < LearnerSubmissions.length; i++) {
    if (LearnerSubmissions[i].learner_id === learnerId && LearnerSubmissions[i].assignment_id == assignmentId) {
        let studentScore = LearnerSubmissions[i].submission.score;
        return studentScore;
        } 
    }
        return null;
    };
console.log(getScores(125,1)) ;        

// function getScores (student_id, assignment_id){
//             scores = [];
//             student_id = [];
//             assignment_id = [];
//             for (i = 0; i < LearnerSubmissions.length; i++) {
//                 scores.push(LearnerSubmissions[i].submission.score);
//                 student_id.push(LearnerSubmissions[i].learner_id);
//                 assignment_id.push(LearnerSubmissions[i].assignment_id);
//             }
//         return scores;
//         return student_id;
//         return assignment_id;
//          };
// =========== End of getScores function =======================================






        // console.log(LearnerSubmissions);
        // console.log(LearnerSubmissions[0].submission.score)
        // console.log(LearnerSubmissions[0].learner_id)
        

        
        
        

    //let avg;
    // const submissionTime;
    // const dueDate;
    // const scores;
    // const id;
   // studentId, courseID, Assignment ID, scores, due dates, submission dates
   // let courseID = CourseInfo.id;
   //console.log("course ID", courseID);

   // let studentId = LearnerSubmissions[0];
   // console.log(studentId)
   // console.log(LearnerSubmissions[4].learner_id)
   // LearnerSubmissions.forEach(ele => {console.log(ele.learner_id)});


// Step 2: create functions to validate edge cases or calculate averages etc
// function calcAvg (n1, n2) {
//     let avg = (n1 + n2)/ 2;
//     return avg;
//}
// Step 3: create the objects to be returned


//Use for each to get the scores
// LearnerSubmissions.forEach (function(ele) {
//     return [ele.learner_id, ele.assignment_id, ele.submission.score]
// });