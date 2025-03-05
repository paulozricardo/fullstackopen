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
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};
/*
const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <>
      <Header courseHeader={course} />
      <Content part={parts[0].name} exercises={parts[0].exercises} />
      <Content part={parts[1].name} exercises={parts[1].exercises} />
      <Content part={parts[2].name} exercises={parts[2].exercises} />
      <Total exercise={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </>
  );
};
*/
/**
  const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  
    return (
        <>
        <Header courseHeader={course} />
        <Content part={part1.name} exercises={part1.exercises} />
        <Content part={part2.name} exercises={part2.exercises} />
        <Content part={part3.name} exercises={part3.exercises} />
        <Total exercise={part1.exercises + part2.exercises + part3.exercises} />
      </>
    )
  } 
 */

export default App;
