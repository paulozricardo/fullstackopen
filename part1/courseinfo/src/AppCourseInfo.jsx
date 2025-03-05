const Header = (propsHeader) => {
  return <h1>{propsHeader.courseHeader}</h1>;
};

const Content = (propsContent) => {
  return (
    <div>
      <h2>
        {propsContent.part} {propsContent.exercises}
      </h2>
    </div>
  );
};

const Total = (soma) => {
  return (
    <div>
      <h3>Number of exercises {soma.exercise}</h3>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header courseHeader={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercise={exercises1 + exercises2 + exercises3} />
    </>
  );
};

export default App;
