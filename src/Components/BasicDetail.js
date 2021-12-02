const BasicDetail = ({data}) => {
  return (
    <div>
      <h2>Employee Basic Details Component:</h2>
      <h3>Employee Name: {data.name}</h3>
      <h3>Employee Age: {data.age}</h3>
      <h3>Employee Designation: {data.designation}</h3>
    </div>
  );
};

export default BasicDetail;