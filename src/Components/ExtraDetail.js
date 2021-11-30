const ExtraDetails = (WrappedComponent) => {
  const salary = ({ data }) => {
    return (
      <>
        <WrappedComponent data={data} />
        <div>
          <h2>Employee Salary Details Component:</h2>
          <h3>Employee Name: {data.name}</h3>
          <h3>Employee Salary: {data.salary}</h3>
          <h3>Employee Bonus: {data.bonus}</h3>
        </div>
      </>
    );
  };

  return salary;
};

export default ExtraDetails;
