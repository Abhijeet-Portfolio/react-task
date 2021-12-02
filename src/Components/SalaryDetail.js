const SalaryDetail = ({ data }) => {
  return (
    <div>
      <h2>Employee Salary Details Component:</h2>
      <h3>Employee Name: {data.name}</h3>
      <h3>Employee Salary: {data.salary}</h3>
      <h3>Employee Bonus: {data.bonus}</h3>
    </div>
  );
};

export default SalaryDetail;
