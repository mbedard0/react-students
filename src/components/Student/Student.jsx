import Score from "../Score/Score";

const Student = (props) => {
  return (
    <>
      <div>
        <h3>Name: {props.student.name}</h3>
        <p>Bio: {props.student.bio}</p>
        <p><Score scores={props.student.scores}/></p>
      </div>
    </>
  );
}

export default Student