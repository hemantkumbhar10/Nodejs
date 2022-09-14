**#Bookess APP**

**_Run following command to install dependencies required for project_**

>>npm install
-------------------------------------------------------------------------------------------------

As per instruction in assignment says _"Dont add any UI in the Application"_

The whole application can be solely tested on postman.

Since there isnt any UI the Api need to be given input manually.

-------------------------------------------------------------------------------------------------

**_To run the app if you need to seed the database with fake datas run following individually._**

>>cd seeds
>>node booksdetails.seeds.js        (This will add fake data of books. you can see file for how its implemented);
>>node users.seeds.js                (This will add fake data of users and admins. you can see file for how its implemented);

--------------------------------------------------------------------------------------------------

**_To See all books without login_**

http://localhost:3000/books                             **get**

--------------------------------------------------------------------------------------------------

**_To create or signup new user or admin_**

http://localhost:3000/signup                           **post**

**_sample data_**

{
    "fullname":"Sherlock Holmes",
    "email":"holmes@gmail.com",
    "password":"Iam@sherlocked",
    "role":"user"                           
}

**role can be either "user" or "admin"...Default is user**

----------------------------------------------------------------------------------------------------

**_To login with user_**

http://localhost:3000/signin                          **post**

**_Sample data_**

{
    "email":"holmes@gmail.com",
    "password":"Iam@sherlocked"
}

-----------------------------------------------------------------------------------------------------

**_To signout_**

http://localhost:3000/signin                         **post**

**doesnt need sample data to input**

-----------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------

**ADMIN CRUD ON BOOKS**

----------------------------------

**_To Create a new book_**
**_Creates book only if login person have admin role_**

http://localhost:3000/book                           **post**


**_sample data_**

{
    "isbn": "123456789",
    "title": "My book",
    "author": "Me, no one else",
    "publisher": "Dreams company"
}

------------------------------------------------------------------------------------------------------

**_To get book by id_**
**_only admins can access individual book as per assignment(CRUD)_**

http://localhost:3000/book/:id                       **get**

**_Use any id of any book from your db to fetch book_**

------------------------------------------------------------------------------------------------------

**_To delete book by id_**
**_only admins can delete individual book as per assignment(CRUD)_**

http://localhost:3000/book/:id                       **delete**

**_Use any id of any book from your db to delete book_**

-------------------------------------------------------------------------------------------------------

**_To update book by id_**
**_only admins can update individual book as per assignment(CRUD)_**

http://localhost:3000/book/:id                       **post**


**_sample data_**

{
    "isbn": "123456789",
    "title": "My book",
    "author": "Me, no one else",
    "publisher": "Dreams company"
}

**_Use any id of any book from your db to delete book_**

---------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------

**ADMIN CRUD ON USER**

-----------------------

**_Create new user_**
**_admins can create user as per assignment(CRUD)_**

http://localhost:3000/user                       **post**

**_sample data_**

{
    "fullname":"emi nem",
    "email":"emi@name.com",
    "password":"shady@123",
    "role":"user"
}

--------------------------------------------------------------------------------------------------------

**_Get all users_**
**_only admins can see all users as per assignment(CRUD)_**

http://localhost:3000/users                      **get**

--------------------------------------------------------------------------------------------------------

**_Get user by id_**
**_only admins can see individual user as per assignment(CRUD)_**

http://localhost:3000/user/:id                   **get**

**_Use any id of any user from your db to see user_**

--------------------------------------------------------------------------------------------------------

**_Update user by their id_**
**_only admins can update individual user as per assignment(CRUD)_**

http://localhost:3000/users/:id                  **post**

**_sample data_**

{
    "fullname":"emi nem",
    "email":"eminem.8miles@yahoo.com",
    "password":"Slimshady@123",
    "role":"user"
}

**_Use any id of any user from your db to update user_**

---------------------------------------------------------------------------------------------------------

**_Delete user by their id_**
**_only admins can delete individual user as per assignment(CRUD)_**

http://localhost:3000/user/:id                   **delete**


**_Use any id of any user from your db to delete user_**

---------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------

**ACTION THAT ONLY USER CAN PERFORM**

----------------------------------------

**_Add books to the read later and liked section_**

**_Since we cant use any UI, we also cant add clickable actions so we have to give books name manually_**

**_The given data automatically binds for logged in user only_**

http://localhost:3000/user/actions                    **post**

**_sample data_**

{
    "readlater":"champak",
    "liked":"chetak"
}

----------------------------------------------------------------------------------------------------------

**_Get readlater and liked book sections of logged in user_**
**_Only logged in user can get his action section_**

http://localhost:3000/user/actions                  **get**

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------


**In real world we dont share 'dot env' file but doing it just for sake of assignment**
--------------------------------------------------------------------------------------

**APP STRUCTURE**

---------------------------------------------------------------------------------------------------------

Models –
	User
	Books
	[user, read later books, liked books]

Routes – 
	Authentication –
		Signup user and admin
		Signin user and admin
		Signout user and admin

	Books –
		Post book only admin
		Get all books login or without login
		Get book by id
 		Update book only admin
		Delete book only admin
		Get user admin
		Update user admin
		Delete user admin
	
	UserAction –
		Get user 
		Get book
		Post read later book
		Post loved book



Controller –
	Authentication –
		Create signup user and admin
		Create signin user and admin
		Create signout user and admin

	Books –
		Post book only admin
		Get all books login or without login
		Get book by id
 		Update book only admin
		Delete book only admin
		Get user admin
		Update user admin
		Delete user admin
	
	UserAction –
		Get user 
		Get book
		Post read later book
		Post loved book


Middleware –
	Authorize user and admin JWT TOKEN
	Verify duplicate email



Config –
	Create db server

.env –
	Contains secrets and mongo uri

Server.js—
	Main flow of app

Seeds—
	Default data for users
	Default data for books

READ.ME –
	Structure explained
