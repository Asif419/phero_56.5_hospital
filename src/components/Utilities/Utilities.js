const dataLoader = async (doctorId) => {
  const response = await fetch('doctors.json');
  const data = await response.json();
  const doctor = data.find(d => d.id === parseInt(doctorId));
  return doctor;
};

export default dataLoader;