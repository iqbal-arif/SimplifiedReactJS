export function User({ name, age }) {
  return (
    /***************************** */
    // Declarative Way of Writing Code
    /***************************** */

    <h1>
      {name}: <span style={{ color: "red" }}>{age}</span>
    </h1>
  );
}
/***************************** */
//Imperative Way of Writing Code
/***************************** */

// 1. Create H1
const h1 = document.createElement("h1");

// 2. Put name in h1
h1.innerText = "the name";

// 3. Create span in h1 that is red
const span = document.createElement("span");
span.style.color = "red";
h1.append(span);

//  4. Put age in that span
span.innerText = age;

//  5. Enter new age
span.innerText = newAge;
