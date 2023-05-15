# cocktailsApp
# PROJECT DESCRIPTION

It consists of a cocktail website, where you can view the cocktails. There is the possibility of creating a profile, to save favorites and create and edit your own cocktails.

## MODELS
- Users
- UserCoctails

## USERS:
- **Admin:** change user's roles, edit, delete profiles.
- **User editor:** They can create their own cocktails, edit and show them on their profile. In addition, they have the ability to access all content and mark cocktails as favorites.
- **User basic:** They can access the details of the cocktails.

## AUTH
    Sing UP
    Log In
    My Profile
        Edit/ Delete Profile
        List Fav Cocktails
        Create/Edit/Delete Your Cocktails (My Bar)

    Log Out

## WEB
    Navbar
        Home
            Header
                Alcohol/Not Alcohol
                    /:id/Cocktails details
                Populars Ingredients
                    /:id/Cocktails details
        Users
        Random
            /:id/Cocktails details

## API
URL
    https://www.thecocktaildb.com/api.php


## Endpoint table

| HTTP Method 	| URI path      	        | Description                                   |   JSON 	 |
|-------------	|---------------	        |-----------------------------------------------|-------------
| POST         	| `/singup`             	| Register  User                                | 
| GET         	| `/singup`             	| Render Sing up Form       	                | 
| GET         	| `/login`             	    | Render login form                             | 
| POST         	| `/login`             	    | Redirect Profile                              | 
| POST         	| `/logout`             	| Init session                                  | 
| GET         	| `/`             	        | Index page          	                        | 
| GET         	| `/alcohol` 	            | Alcohol list 	                                |
| GET         	| `/not-alcohol` 	        | Not alcohol list 	                            |
| GET         	| `/rum` 	                | Run list 	                                    |
| GET         	| `/vodka` 	                | Vodka list 	                                |
| GET         	| `/gin` 	                | Gin list 	                                    |
| GET       	| `/tequila` 	            | Tequila list	                                |
| GET           | `/:id/details` 	        | Render details api cocktels 	                |
| POST         	| `/:id/favourite`          | Mark as favourite in user profile 	        |
| GET       	| `/profile` 	            | Render user,my favourites,myBar 	            |
| GET           | `/profile/:id/edit` 	    | Render form edit profile 	                    |
| POST          | `/profile/:id/edit`       | Handler profile 	                            |
| POST          | `/profile/:id/delete`     | Delete profile	                            |
| GET           | `/profile/create-`         | Render Form cocktail 	            |
| POST          | `/profile/create-cocktail`         | Handler cocktail created 	        |
| GET           | `/profile/cocktail-details/:id`         | Render cocktail details 
| GET           | `/:id/edit-cocktail/:id(cocktail)`  | Render Form edit cocktail 	    |
| POST          | `/:id/edit-cocktail/:id(cocktail)`  | Handler edit cocktail created   |
| POST          | `/:id/delete-cocktail/:id(cocktail)`| Delete cocktail created 	    |
| POST          | `/:id/role`               | Handler role 	                                |
| GET         	| `/api/cocktail` 	    | Cocktail `Array` 	                            | ✅  
