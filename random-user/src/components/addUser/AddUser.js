import React from "react";

export default function AddUser(props) {
  return (
    <div>
      {props.userList.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {props.userList.map((el, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{el.firstName}</td>
                  <td>{el.email}</td>
                  <td>{el.phone}</td>
                  <td>{el.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
