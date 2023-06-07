// solution1
var person = [
    "name",
    "age",
    "class",
    "dob",
    "gender"
]

// solution2
person[person.length] = "nationality";

// solution3
person[2] = "hobbits";

// solution5
var arr = [0,1,2,3,4,[5,6,7],8,9];
arr[5][0];

// solution6
arr[arr.length -1];

// solution7
var arr = [0,1,2,3,4,[5,6,7],8,9]
arr[0] = 1;
arr[1] = 0;

// solution8
let classRoom = {
    boardColor: "white",
    size: "extraLarge",
    pupils: "19"
}

// solution9
classRoom["courses"] = 2;

// solution10
classRoom.boardColor;

// solution11
classRoom["pupils"];

// solution19
let people = [
       {name: "mary", contact: 0881999000},
       {name: "paul", contact: 0881999600},
       {name: "peter", contact: 0881999400},
       {name: "sara", contact: 0881999300}
]
people[0].name;

// solution20
people[0].gender = "female"
people[1].gender = "male"
people[2].gender = "male"
people[3].gender = "female"

// solution21
people[people.length] = {name: "Big Tim", contact: 0777470740};

// solution22
people[3].contact