// Without type:
// export default function HelloBlock(props) {

// With separate prop type:
type HelloProps = {
  name: string;
  age: number;
};
// export default function HelloBlock(props: HelloProps) {

// With deconstructed props (this one is yuck):
// export default function HelloBlock({name, age}: HelloProps) {

// With inline props:
export default function HelloBlock(props: {
  name: string;
  age: number;
  hobby: string;
  like: boolean;
}) {
  console.log(props);

  const myName = props.name;
  const myAge = props.age;
  const myHobby = props.hobby;
  const doesLike = props.like;

  return (
    <div>
      <h2>Hello There</h2>
      <p>
        {myName} who is {myAge}
      </p>
      <p>
        Your hobby is {myHobby}, and do you like it?..... You said{" "}
        {doesLike ? "Yes" : "No"}!
      </p>
    </div>
  );
}
