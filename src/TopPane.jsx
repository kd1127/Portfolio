import "./App.css";

const TopPane = () => {
    return (
        <div>
            {//	ローカル用 <img alt="トップ画像" src="./public/TopPicture.jpg" Class="picture"></img>
}
			<img alt="トップ画像" src="./TopPicture.jpg" Class="picture"></img>
            <p Class="title" id="index">My Portfolio Site</p>
            <div Class="mainmenu">
    			<span Class="sec1">
     	 			<a href="#sec1">Introduction</a>
    			</span>
    			<span Class="sec2">
      				<a href="#sec2">MySkills</a>
    			</span>
    			<span Class="sec3">
      				<a href="#sec3">Works</a>
   				 </span>
    			<span Class="sec4">
      				<a href="#sec4">PrivateDevelop</a>
    			</span>
				<span Class="sec5">
					<a href="#sec5">Contact</a>
				</span>
            </div>
        </div>
    );
}
export default TopPane;