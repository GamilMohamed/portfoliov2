import "./projets.css";
import cub3d from "../assets/projects/cub3d.mp4";
import minishell from "../assets/projects/shell.gif";
import push_swap from "../assets/projects/pushswap.gif";
import ps42 from "../assets/projects/ps42.mp4";



function Projets() {
	return (
		<>
		<div id="Projets">

		<video controls>
			<source src={cub3d} type="video/mp4" />
		</video>
		<img src={minishell} alt="minishell" />
		<img src={push_swap} alt="push_swap" />
		<video controls>
			<source src={ps42} type="video/mp4" />
		</video>
		</div>
		</>
	);
}
export default Projets;