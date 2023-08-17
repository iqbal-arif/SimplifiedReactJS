export function NamePropDestructure({ name, age = 39, isProgrammer }) {
  console.log("is Programmer", isProgrammer);
  return (
    <>
      {name} {age}
    </>
  );
}
