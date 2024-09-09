import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
import "./App.css";

function App() {
  const [data, setdata] = useState([]);
  const [value, setvalue] = useState("");

  useEffect(() => {
    LoadUsersData();
  }, []);

  const LoadUsersData = async () => {
    return await axios
      .get("http://localhost:5000/users")
      .then((response) => setdata(response.data))
      .catch((err) => console.log(err));
  };

  // console.log(data.map((data) => ({ name: data.name, city: data.city })));

  const handleReset = () => {
    LoadUsersData();
  };
  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      const respData = await axios.get(
        `http://localhost:5000/users?q=${value}`
      );
      const filteredData = respData.data.filter((item) =>
        item.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setdata(filteredData);
      setvalue("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <MDBContainer>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          className="d-flex input-group w-auto"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            className="form-control"
            placeholder="search name"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
          <MDBBtnGroup>
            <MDBBtn type="submit" color="dark">
              Search
            </MDBBtn>
            <MDBBtn className="mx-2" color="info" onClick={() => handleReset()}>
              Reset
            </MDBBtn>
          </MDBBtnGroup>
        </form>
        <div style={{ marginTop: "100px" }}>
          <h2 className="text-center">
            Search, filter, sort and pagination using JSON fake REST API
          </h2>
          <MDBRow>
            <MDBCol size="12">
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                    <th scope="col">no.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Adress</th>
                    <th scope="col">City</th>
                    <th scope="col">Status</th>
                  </tr>
                </MDBTableHead>
                {data.length === 0 ? (
                  <MDBTableBody className="align-center mb-0">
                    <tr>
                      <td colSpan={8} className="text-center mb-0">
                        No data found{" "}
                      </td>
                    </tr>
                  </MDBTableBody>
                ) : (
                  data.map((item, index) => (
                    <MDBTableBody key={index}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>{item.city}</td>
                        <td>{item.status}</td>
                      </tr>
                    </MDBTableBody>
                  ))
                )}
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </div>
  );
}

export default App;
