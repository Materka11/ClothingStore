# ClothingStore

A project of an online store modeled on zalando, designed in Adobe XD by me. The product was created using React (17.0.2), Sass and Straps. Project history is available in commits. I tried my own solutions and not based on solutions on the Internet. The project is adapted to mobile applications and desktop computers.

Technologies and methods used in this project:

	- React: 
		- useEffect,
		- useState,
		- custom hook (useFetch),
		- React Router Dom: 
			- Link,
			- useParams,
			- useNavigate,
			- Routes,
			- Route,
			- Navigate,
			- useLocation,
			- Router
		- inline style,
		- Array.prototype.map,
		- Array.prototype.concat,
		- Array.prototype.find,
		- Array.prototype.filter,
		- Array.prototype.findIndex,
		- Array.prototype.sort,
		- Array.prototype.falt,
		- Array.prototype.indexOf,
		- createContext,
		- useReaducer,
		- useContext
	- Sass: 
		- variables,
		- extends,
		- flexbox
I wanted to put the whole project on the server but cloudinary did not want to work with pains, the possible reason for that was related to the old version of pains. I tried to update but the whole backend was ruined for me. Cooperation with herok was also hard.

	cd backend
	npm run develop
	cd ..
	cd frontend/clothingstore
	npm start

After using these commands you need to go to frontend/clothingstore/src/components/Homepage.js and change the apiUrl variable to your ip
