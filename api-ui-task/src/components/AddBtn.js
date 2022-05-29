import { useNavigate } from "react-router-dom";
const AddBtn = () => {
  let navigate = useNavigate();
  const createNewItem = () => {
    navigate("new-assignment");
  };
  return (
    <button className="addBtn" onClick={createNewItem}>
      <div className="union">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    </button>
  );
};

export default AddBtn;
