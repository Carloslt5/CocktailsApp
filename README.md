# cocktailsApp
# PROJECT 2
DESCRIPCIÓN DEL PROYECTO
Consiste en una web de cockteles, en la que se pueden visualizar los cockteles. Existe la posibilidad de crear un perfil, para guardar los favoritos y crear y editar los cockteles propios.

MODELS
    Users
    UserCoctails


USERS:
    Roles
    - Admin: cambiar roles de cualquier user, editar, eliminar perfiles.
    - User editor: Pueden crear sus propios cockteles, editar y mostrarlos en su perfil. Además, tienen la capacidad de poder acceder a todo el contenido y marcar cócteles como favoritas.
    - User basic: Pueden acceder a los detalles de los cockteles.

AUTH
    Sing UP
    Log In
        My Profile
            Edit/ Delete Profile
            List Fav Coctails
            Create/Edit/Delete Your Coctails (My Bar)
    Log Out

WEB
    Navbar
        Home
            Header
            Alcohol/Not Alcohol --> alcohol list/not alcohol list
            Populars Ingredients --> rum,vodka, gin or tequila

        /:id
            Coctails details

        Random

API
    URL
        https://www.thecocktaildb.com/api.php


## Endpoint table

| HTTP Method 	| URI path      	        | Description                                     | JSON 	 |
|-------------	|---------------	        |-----------------------------------------------| |----------|
| POST         	| `/singup`             	| Register  User                                | |
| GET         	| `/singup`             	| Render Sing up Form       	                | |
| GET         	| `/login`             	    | Render login form                             | |
| POST         	| `/login`             	    | Redirect Profile                              | |
| POST         	| `/logout`             	| Init session                                  | |
| GET         	| `/`             	        | Index page          	                        | |
| GET         	| `/alcohol` 	            | Alcohol list 	                                | |
| GET         	| `/not-alcohol` 	        | Not alcohol list 	                            | |
| GET         	| `/rum` 	                | Run list 	                                    | |
| GET         	| `/vodka` 	                | Vodka list 	                                | |
| GET         	| `/gin` 	                | Gin list 	                                    | |
| GET       	| `/tequila` 	            | Tequila list	                                | |
| GET           | `/{id}/details` 	        | Render details api cocktels 	                | |
| POST         	| `/{id}/favourite`         | Mark as favourite in user profile 	        | |
| GET       	| `/profile` 	            | Render user,my favourites,myBar 	            | |
| GET           | `/profile/{id}/edit` 	    | Render form edit profile 	                    | |
| POST          | `/profile/{id}/edit`      | Handler profile 	                            | |
| POST          | `/profile/{id}/delete`    | Delete profile	                            | |
| GET           | `/profile/{id}/create-myCocktail`         | Render Form cocktail 	        | |
| POST          | `/profile/{id}/create-myCocktail`         | Handler cocktail created 	    | |
| GET           | `/{id}/edit-myCocktail/{id}(myCocktail)`  | Render Form edit cocktail 	| |
| POST          | `/{id}/edit-myCocktail/{id}(myCocktail)`  | Handler edit cocktail created | |
| POST          | `/{id}/delete-myCocktail/{id}(myCocktail)`| Delete cocktail created 	    | |
| POST          | `/{id}/role`               | Handler role 	                            | |
| GET         	| `/api/myCocktail` 	     | Cocktail `Array` 	                        | | ✅  |
