import { array} from "prop-types";
import React, { useEffect, useState } from "react";
import {getAllToDos, updateToDos} from "../api";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const localStorageKey ="ToDos_key";
const Home = () => {
	const [ToDos, setToDos] = useState([]);
	const [previousToDos, setPreviousToDos] = useState(ToDos);
	//const[inputValue, setInputValue] = useState("");
	useEffect (async ()=>{
		// console.log("Run Once");
		// console.log(localStorage.getItem(localStorageKey));
		// let localStorageToDos=JSON.parse(localStorage.getItem(localStorageKey));
		// setToDos(localStorageToDos);
		let apitodos = await getAllToDos();
		setToDos(apitodos);
		setPreviousToDos(apitodos);
	},[]);

	useEffect(()=>{
		console.log("everytime todo changes");
		console.log(JSON.stringify(ToDos));
		localStorage.setItem(localStorageKey,JSON.stringify(ToDos));
	}, [ToDos.length]);

	let onType = (event) =>{
		if(event.code == "Enter"){
			let newToDos=[...ToDos];
			newToDos.push(event.target.value);
			setToDos(newToDos);
			event.target.value="";
		}
		console.log(event);
	}

	console.log(previousToDos);
	console.log(ToDos);
	console.log("===")



	return (
		<div className="text-center">
			<h1>Todos</h1>
			<div className="inputDiv">
				<input onKeyUp={onType} placeholder="To Do Here"/>
				<ul>
					{ToDos.map(
						(todo, index)=>{
						return(
						<li>
							<p>{todo}</p>
							<button onClick={()=> {
							let newToDos = [...ToDos];
							newToDos.splice(index,1);
							setToDos(newToDos);
							setPreviousToDos(ToDos);
						}}>X</button>
						</li>)
					})}
				</ul>
			</div>
			<p>
				<button onClick={() =>{
					setToDos([]);
					setPreviousToDos(ToDos);
				}}> Delete list</button>
			</p>
			<p>
				<button onClick={() =>{
					setToDos(previousToDos);
				}}> Undo</button>
			</p>
		</div>
	);
};

export default Home;
