import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Student() {

  const [students, setStudents] = useState([]);
  const [batchType, setBatchType] = useState("All");

  let navigate = useNavigate();

  // ================= GET ALL STUDENTS =================

  async function getAllStudent() {

    try {

      let result = await axios.get(
        "http://localhost:8080/all"
      );

      setStudents(result.data);

    } catch (error) {

      console.log(error);

    }
  }

  // ================= DELETE STUDENT =================

  let deletestudent = async (id) => {

    if (confirm("Do you want to delete record ? : " + id)) {
      try {

        await axios.delete(
          "http://localhost:8080/delete/" + id
        );

        getAllStudent();

      } catch (error) {

        console.log(error);

      }

    }

  };

  // ================= EDIT STUDENT =================

  let onEdit = (id) => {

    if (confirm("Do you want to update record ? : " + id)) {

      navigate("/updatestudent/" + id);

    }

  };

  // ================= USE EFFECT =================

  useEffect(() => {

    getAllStudent();

  }, []);


  // ================= FILTER STUDENTS =================

  const filteredStudents = students.filter((student) => {

    if (batchType === "Special") {

      return Number(student.fees) === 60000;

    }

    if (batchType === "Regular") {

      return Number(student.fees) === 30000;

    }

    return true;

  });


  // ================= TOTAL FEES =================

  const totalFees = filteredStudents.reduce(
    (total, student) =>
      total + Number(student.fees || 0),
    0
  );


  // ================= RETURN =================

  return (

    <div className="container-fluid bg-light min-vh-100 py-4">

      <div className="container">

        {/* ================= HEADER ================= */}

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>

            <h2 className="fw-bold mb-1">
              Course Management
            </h2>

            <p className="text-muted mb-0">
              Manage students, courses and registrations
            </p>

          </div>

          <button
            className="btn btn-primary px-4"
            onClick={() => navigate("/registration")}
          >
            + Add Student
          </button>

        </div>


        {/* ================= FILTER BUTTONS ================= */}

        <div className="card border-0 shadow-sm mb-4">

          <div className="card-body">

            <div className="d-flex flex-wrap gap-2">

              <button
                className={
                  batchType === "All"
                    ? "btn btn-dark"
                    : "btn btn-outline-dark"
                }
                onClick={() => setBatchType("All")}
              >
                All Students
              </button>


              <button
                className={
                  batchType === "Special"
                    ? "btn btn-warning"
                    : "btn btn-outline-warning"
                }
                onClick={() => setBatchType("Special")}
              >
                ⭐ Special Batch ₹60,000
              </button>


              <button
                className={
                  batchType === "Regular"
                    ? "btn btn-success"
                    : "btn btn-outline-success"
                }
                onClick={() => setBatchType("Regular")}
              >
                Regular Batch ₹30,000
              </button>

            </div>

          </div>

        </div>


        {/* ================= DASHBOARD CARDS ================= */}

        <div className="row g-3 mb-4">


          {/* TOTAL STUDENTS */}

          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body">

                <div className="d-flex justify-content-between">

                  <div>

                    <p className="text-muted mb-1">
                      {batchType === "All"
                        ? "Total Students"
                        : batchType === "Special"
                        ? "Special Batch Students"
                        : "Regular Batch Students"}
                    </p>

                    <h3 className="fw-bold mb-0">
                      {filteredStudents.length}
                    </h3>

                  </div>


                  <div
                    className="bg-primary text-white d-flex justify-content-center align-items-center"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "10px"
                    }}
                  >
                    👨‍🎓
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* AVAILABLE COURSES */}

          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body">

                <div className="d-flex justify-content-between">

                  <div>

                    <p className="text-muted mb-1">
                      Available Courses
                    </p>

                    <h3 className="fw-bold mb-0">
                      3
                    </h3>

                  </div>


                  <div
                    className="bg-success text-white d-flex justify-content-center align-items-center"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "10px"
                    }}
                  >
                    📚
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* TOTAL FEES */}

          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body">

                <div className="d-flex justify-content-between">

                  <div>

                    <p className="text-muted mb-1">
                      {batchType === "All"
                        ? "Total Fees"
                        : batchType === "Special"
                        ? "Special Batch Fees"
                        : "Regular Batch Fees"}
                    </p>

                    <h3 className="fw-bold mb-0 text-success">
                      ₹{totalFees}
                    </h3>

                  </div>


                  <div
                    className="bg-warning text-white d-flex justify-content-center align-items-center"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "10px"
                    }}
                  >
                    ₹
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= STUDENT TABLE ================= */}

        <div className="card border-0 shadow-sm">


          {/* TABLE HEADER */}

          <div className="card-header bg-white py-3">

            <div className="d-flex justify-content-between align-items-center">

              <div>

                <h5 className="fw-bold mb-0">
                  Student Details
                </h5>

                <small className="text-muted">

                  {batchType === "All"
                    ? "All registered students"
                    : batchType === "Special"
                    ? "Only Special Batch students"
                    : "Only Regular Batch students"}

                </small>

              </div>


              <span className="badge bg-primary fs-6">

                {filteredStudents.length} Students

              </span>

            </div>

          </div>


          {/* TABLE BODY */}

          <div className="card-body p-0">

            <div className="table-responsive">

              <table className="table table-hover align-middle mb-0">


                {/* ================= TABLE HEAD ================= */}

                <thead className="table-light">

                  <tr>

                    <th className="text-center px-3">
                      #
                    </th>

                    <th>
                      Student
                    </th>

                    <th>
                      Email
                    </th>

                    <th>
                      Contact
                    </th>

                    <th>
                      Batch
                    </th>

                    <th>
                      Courses
                    </th>

                    <th>
                      Fees
                    </th>

                    <th>
                      Image
                    </th>

                    <th className="text-center">
                      Actions
                    </th>

                  </tr>

                </thead>


                {/* ================= TABLE BODY ================= */}

                <tbody>


                  {filteredStudents.length > 0 ? (

                    filteredStudents.map((student, index) => (

                      <tr key={student.id}>


                        {/* SR NO */}

                        <td className="text-center fw-semibold text-muted">

                          {index + 1}

                        </td>


                        {/* STUDENT */}

                        <td>

                          <div className="fw-semibold">
                            {student.name}
                          </div>

                          <small className="text-muted">
                            Student ID: {student.id}
                          </small>

                        </td>


                        {/* EMAIL */}

                        <td>
                          {student.email}
                        </td>


                        {/* CONTACT */}

                        <td>
                          {student.contact}
                        </td>


                        {/* BATCH */}

                        <td>

                          <span className="badge bg-light text-dark border">

                            {student.batch}

                          </span>

                        </td>


                        {/* COURSES */}

                        <td>

                          <div className="d-flex flex-wrap gap-1">

                            {Array.isArray(student.courses) &&

                              student.courses.map(
                                (course, i) => (

                                  <span
                                    key={i}
                                    className="badge bg-primary-subtle text-primary border border-primary-subtle"
                                  >

                                    {course}

                                  </span>

                                )
                              )}

                          </div>

                        </td>


                        {/* FEES */}

                        <td>

                          <span className="fw-bold text-success">

                            ₹{student.fees}

                          </span>

                          {Number(student.fees) === 60000 && (

                            <span className="badge bg-warning text-dark ms-2">

                              Special

                            </span>

                          )}

                          {Number(student.fees) === 30000 && (

                            <span className="badge bg-success ms-2">

                              Regular

                            </span>

                          )}

                        </td>


                        {/* IMAGE */}

                        <td>

                          {student.imageUrl ? (

                            <img
                              src={student.imageUrl}
                              alt={student.name}
                              width="55"
                              height="55"
                              style={{
                                objectFit: "cover",
                                borderRadius: "6px"
                              }}
                              className="border"
                            />

                          ) : (

                            <div
                              className="bg-light border d-flex justify-content-center align-items-center"
                              style={{
                                width: "55px",
                                height: "55px",
                                borderRadius: "6px"
                              }}
                            >
                              👤
                            </div>

                          )}

                        </td>


                        {/* ACTIONS */}

                        <td>

                          <div className="d-flex gap-2 justify-content-center">

                            <button
                              className="btn btn-sm btn-outline-primary"
                              onClick={() =>
                                onEdit(student.id)
                              }
                            >
                              Edit
                            </button>


                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() =>
                                deletestudent(student.id)
                              }
                            >
                              Delete
                            </button>

                          </div>

                        </td>


                      </tr>

                    ))

                  ) : (

                    <tr>

                      <td
                        colSpan="9"
                        className="text-center py-5"
                      >

                        <h5 className="text-muted">
                          No Students Found
                        </h5>

                        <p className="text-muted mb-0">

                          No students found in{" "}

                          {batchType === "Special"
                            ? "Special Batch ₹60,000"
                            : "Regular Batch ₹30,000"}

                        </p>

                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>


      </div>

      {/* ================= TEACHER MANAGEMENT ================= */}

<div className="card border-0 shadow-sm mt-5">

  <div className="card-header bg-white py-3">

    <div className="d-flex justify-content-between align-items-center">

      <div>
        <h5 className="fw-bold mb-0">
          Teacher Management
        </h5>

        <small className="text-muted">
          Manage teachers and their specializations
        </small>
      </div>

      <button className="btn btn-primary">
        + Add Teacher
      </button>

    </div>

  </div>


  <div className="card-body">

    <div className="row g-3">

      {/* TOTAL TEACHERS */}
      <div className="col-md-4">

        <div className="card border-0 bg-light">

          <div className="card-body">

            <div className="d-flex justify-content-between">

              <div>
                <p className="text-muted mb-1">
                  Total Teachers
                </p>

                <h3 className="fw-bold mb-0">
                  5
                </h3>
              </div>

              <div
                className="bg-primary text-white d-flex align-items-center justify-content-center"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px"
                }}
              >
                👨‍🏫
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* SPECIALIZED TEACHERS */}
      <div className="col-md-4">

        <div className="card border-0 bg-light">

          <div className="card-body">

            <div className="d-flex justify-content-between">

              <div>
                <p className="text-muted mb-1">
                  Specialized Teachers
                </p>

                <h3 className="fw-bold mb-0">
                  4
                </h3>
              </div>

              <div
                className="bg-success text-white d-flex align-items-center justify-content-center"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px"
                }}
              >
                🎓
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ACTIVE TEACHERS */}
      <div className="col-md-4">

        <div className="card border-0 bg-light">

          <div className="card-body">

            <div className="d-flex justify-content-between">

              <div>
                <p className="text-muted mb-1">
                  Active Teachers
                </p>

                <h3 className="fw-bold mb-0">
                  5
                </h3>
              </div>

              <div
                className="bg-warning text-white d-flex align-items-center justify-content-center"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px"
                }}
              >
                ⭐
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* TEACHER TABLE */}

    <div className="table-responsive mt-4">

      <table className="table table-hover align-middle">

        <thead className="table-light">

          <tr>

            <th>#</th>
            <th>Teacher</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>


        <tbody>

          <tr>

            <td>1</td>

            <td>
              <strong>Pratik Sir</strong>
            </td>

            <td>
              <span className="badge bg-primary-subtle text-primary">
                Java & Spring Boot
              </span>
            </td>

            <td>
              6 Years
            </td>

            <td>
              <span className="badge bg-success">
                Active
              </span>
            </td>

            <td>

              <button className="btn btn-sm btn-outline-primary me-2">
                Edit
              </button>

              <button className="btn btn-sm btn-outline-danger">
                Delete
              </button>

            </td>

          </tr>


          <tr>

            <td>2</td>

            <td>
              <strong>Ajinkya Sir</strong>
            </td>

            <td>
              <span className="badge bg-info-subtle text-info">
                Java & Spring Boot React JS
              </span>
            </td>

            <td>
              6 Years
            </td>

            <td>
              <span className="badge bg-success">
                Active
              </span>
            </td>

            <td>

              <button className="btn btn-sm btn-outline-primary me-2">
                Edit
              </button>

              <button className="btn btn-sm btn-outline-danger">
                Delete
              </button>

            </td>

          </tr>

          <tr>

            <td>2</td>

            <td>
              <strong>Om Sir</strong>
            </td>

            <td>
              <span className="badge bg-info-subtle text-info">
                 Java & Spring Boot and React js
              </span>
            </td>

            <td>
              6 Years
            </td>

            <td>
              <span className="badge bg-success">
                Active
              </span>
            </td>

            <td>

              <button className="btn btn-sm btn-outline-primary me-2">
                Edit
              </button>

              <button className="btn btn-sm btn-outline-danger">
                Delete
              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>

</div>

    </div>

  );
}

export default Student;