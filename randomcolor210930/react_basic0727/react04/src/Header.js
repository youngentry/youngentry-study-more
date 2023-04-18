function Header(props) {
  return (
    <header>
      {props.monga}
      <li>{props.member[0].name}</li>
      <li>{props.member[1].name}</li>
      <li>{props.member[2].name}</li>
      <li>{props.member[3].name}</li>
      {props.member.map((el) => (
        <li key={el.id}>{el.name}</li>
      ))}
    </header>
  );
}

export default Header;
