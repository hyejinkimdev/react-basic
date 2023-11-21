function Test() {

  const name = "혜진";
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <>
    <h1>{`Hello! + ${name}`}</h1>
    <ul>
      {
        list.map((item) => (
          <li>{item}</li>
        ))
      }
    </ul>
    </>
  );
}

export default Test;
