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
  
  studentData = {};
    
    const result = []

    // ==================== Step by step breakdown of the problem ==================

    // Step 1: let's loop over the LearnerSubmissions object to obtain the assignment, score and submissionDate data organized by student

      for (let i = 0; i < LearnerSubmissions.length; i ++) {
        let studentId = LearnerSubmissions[i].learner_id;
        // if the student is not in the database, add it and create an assignments dataset
        if(!studentData[studentId]) {
            studentData[studentId] = {
            studentId: studentId,
            assignments: []
          };
        }
        // then push the assignmentId, submissionDate and scores from LearnerSubmissions dataset
          studentData[studentId].assignments.push ({
          assignmentId: LearnerSubmissions[i].assignment_id,
          submissionDate: new Date (LearnerSubmissions[i].submission.submitted_at), // change the date format from string to Date 
          score: LearnerSubmissions[i].submission.score,
          
        });
      }

   // Step 2: Loop through the AssignmentGroup dataset and add the dueDate and pointsPossible into the studentData. I will define a function to do this 

   function addDueDatesAndPossbiblePoints() {
    for (let studentId in studentData){
      let assignments = studentData[studentId].assignments;
    
      for (let j = 0; j < assignments.length; j++) {
        let assignmentId = assignments[j].assignmentId;
        let match = false;
    
        for (let i = 0; i < AssignmentGroup.assignments.length; i ++) {
          if (AssignmentGroup.assignments[i].id === assignmentId) {
            assignments[j].dueDate = new Date (AssignmentGroup.assignments[i].due_at); // change the date format from string to Date 
            assignments[j].pointsPossible = AssignmentGroup.assignments[i].points_possible;
            match = true;
            break
          }
        }
      if (!match) {
        console.log("The assignment id doesn't exist")
        }
      }
    }
    };  
    // execute the function to update studentData
    addDueDatesAndPossbiblePoints()
   
   // Step 3:  Let compare the submission dates and due dates of each assignment for each student and update studentData
  // check if submission is on time or not
  function addSubmissionStatus() {
      for (let studentId in studentData) {
        let assigns = studentData[studentId].assignments;
        
          
        for (i = 0; i < assigns.length; i++) {  
          let submissionDate = assigns[i].submissionDate;
          let dueDate = assigns[i].dueDate;

          if (submissionDate <= dueDate) {
              assigns[i].submissionStatus ="On-Time"; 
             } else {
              assigns[i].submissionStatus ="Late";
              assigns[i].score -= (assigns[i].score * 0.1) // deducts 10% for late submission
          }
          }
        }
      };

  addSubmissionStatus();


  // Step 4: Now that we have the data that we need, let's calculate the averages
  for (let learner in studentData) 
      {
        let relevantData = studentData[learner];
        let avg = {}
            for (i = 0; i < relevantData.assignments.length; i++) 
                {
                  avg = (relevantData.assignments[0].score + relevantData.assignments[1].score) / (relevantData.assignments[0].pointsPossible + relevantData.assignments[1].pointsPossible);
                  studentData[learner].avg = avg;
                  }
        console.log(avg);
      }
      console.dir(studentData, { depth: null });
  
  
  // ========================== Displaying the dataset ==========================
  // I learned from web search that to display the results better, I can use JSON.stringify or console.dir
     // console.log(JSON.stringify(studentData, null, 2));
  console.dir(studentData, { depth: null });
        
  
      return result;
    };

  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
    // ================================END of Document ============================
