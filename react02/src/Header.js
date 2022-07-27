export default function header(props) {
  return (
    <>
      <div style={props.style}>
        {props.name}는 {props.age}살입니다.
      </div>
    </>
  );
}
