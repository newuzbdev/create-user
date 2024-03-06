import "./UserList.css";
const UserList = ({ users, deleteUser }) => {
  return (
    <div className="userList">
      <div className="userList-container container">
        {users.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card-inner">
                <img
                  src={item.imgUrl}
                  alt={item.firstName}
                  height={150}
                  width={150}
                />
                <div className="userList-item-info">
                  <h3>{item.firstName}</h3>
                  <h4>{item.lastName}</h4>
                  <p>{item.age}</p>
                  <p>From:{item.from}</p>
                  <p>Job:{item.job}</p>
                  <p>Gender:{item.gender}</p>
                  <button onClick={() => deleteUser(item.id)}>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
