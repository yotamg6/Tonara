import TopCover from "./TopCover";
import SearchBar from "./SearchBar";
import AssignmentList from "./AssignmentList";
import AddBtn from "./AddBtn";

const CoursePage = () => {
  return (
    <div className="coursePage">
      <AddBtn />
      {/* <button className="addPageButton">+</button> */}
      <img className="teacherImage"></img>
      <TopCover />
      <SearchBar />
      <AssignmentList />
    </div>
  );
};

export default CoursePage;
