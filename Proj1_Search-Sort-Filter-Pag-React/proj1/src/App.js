import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import "./App.css";

function App() {
  const [data, setdata] = useState([]);

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

  return (
    <div className="App">
      <MDBContainer>
        <div style={{ marginTop: "100px" }}>
          <h2>Search, filter, sort and pagination using JSON fake REST API</h2>
          <MDBRow>
            <MDBCol size="12">
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                    <th scope="col">no.</th>
                  </tr>
                </MDBTableHead>
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </div>
  );
}

export default App;
