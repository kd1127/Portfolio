import Introduction from "./Introduction";
import MySkills from "./MySkills";
import WorkExperience from "./WorkExperience";
import PrivateDevelop from "./PrivateDevelop";
import TopPane from "./TopPane";
import InquiryForm from "./InquiryForm";
import "./APP.css";

const App = () => {
    return (
      <div Class="background">
        <TopPane />
        <Introduction /><br></br>
        <MySkills /><br></br>
        <WorkExperience /><br></br>
        <PrivateDevelop />
        <InquiryForm />
      </div>
    )
}

export default App;