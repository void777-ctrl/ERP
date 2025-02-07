import{ useEffect, useState } from "react";
import axios from "axios";

const HRStudentData = () => {
  const [students, setStudents] = useState([]);

  // Fetch student data from backend
  useEffect(() => {
    axios
      .get("http://localhost:8000/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  // Update ID Card status in database
  const handleIDCardUpdate = (studentId, currentStatus) => {
    axios
      .put(`http://localhost:8000/update-student/${studentId}`, {
        idCardReceived: !currentStatus,
      })
      .then(() => {
        setStudents((prevStudents) =>
          prevStudents.map((student) =>
            student.id === studentId
              ? { ...student, idCardReceived: !student.idCardReceived }
              : student
          )
        );
      })
      .catch((error) => {
        console.error("Error updating ID Card status:", error);
      });
  };

  return (
    <div className="overflow-x-auto sm:rounded-lg p-4 bg-white">
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
        HR Student Management
      </h2>
      <table className="min-w-full text-sm text-left text-gray-600 border border-gray-200">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b">
          <tr>
            <th className="px-6 py-3">Sr. No.</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Course</th>
            <th className="px-6 py-3">Fees Paid</th>
            <th className="px-6 py-3">Generate Login</th>
            <th className="px-6 py-3">ID Card</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">{index + 1}</td>
              <td className="px-6 py-4">{student.name}</td>
              <td className="px-6 py-4">{student.course}</td>
              <td className="px-6 py-4">
                {student.feesPaid ? (
                  <span className="text-green-600 font-semibold">✅ Yes</span>
                ) : (
                  <span className="text-red-600 font-semibold">❌ No</span>
                )}
              </td>
              <td className="px-6 py-4">
                {student.feesPaid ? (
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Generate Login
                  </button>
                ) : (
                  <span className="text-gray-500">Not Eligible</span>
                )}
              </td>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  checked={student.idCardReceived}
                  onChange={() => handleIDCardUpdate(student.id, student.idCardReceived)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HRStudentData;
