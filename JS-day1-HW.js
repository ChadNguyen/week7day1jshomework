//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
// dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// dog_names = ["Max","HAS","PuRple","dog"]

// def find_words(string, names):
//     found_match = False
//     for name in names:
//         if name.lower() in string.lower():
//             print(f"Matched {name}")
//             found_match = True
//     if not found_match:
//         print("No Matches")

// find_words(dog_string, dog_names)

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, names) {
  let foundMatch = false;
  for (let name of names) {
    if (str.toLowerCase().includes(name.toLowerCase())) {
      console.log(`Matched ${name}`);
      foundMatch = true;
    }
  }
  if (!foundMatch) {
    console.log("No Matches");
  }
}

findWords(dog_string, dog_names);

//Call method here with parameters



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
// arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// def replace_evens(arr):
//     for i in range(0, len(arr), 2):
//         arr[i] = "even index"
//     return arr

// print(replace_evens(arr))


arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
  for (let i = 0; i < arr.length; i += 2) {
    arr[i] = "even arr";
  }
  return arr;
}

console.log(replaceEvens(arr));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// def count_sheeps(sheep):
//     count = 0
//     for i in sheep:
//         if i:
//             count += 1
//     return count


function countSheeps(sheep) {
    let count = 0;
    for (let i = 0; i < sheep.length; i++) {
      if (sheep[i]) {
        count++;
      }
    }
    return count;
  }
  

//   Task:
//   Find out "B"(Bug) in a lot of "A"(Apple).
  
//   There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.
  
//   input: string Array apple
  
//   output: Location of "B", [x,y]

// def sc(apple):
//     for a in range(len(apple)):
//         for b in range(len(apple[a])):
//             if apple[a][b] == "B":
//                 return [a,b]
//     return None


function sc(apple) {
    for (let a = 0; a < apple.length; a++) {
      for (let b = 0; b < apple[a].length; b++) {
        if (apple[a][b] === "B") {
          return [a, b];
        }
      }
    }
    return False;
  }
  