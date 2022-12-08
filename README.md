# CRUD Rest API

A Create Read Update Delete (CRUD) Rest API using NodeJs and ExpressJs.
I integrated MongoDB using Mongoose to store the data.

## Data

Data is composed of a single table items. All items have:
- Name
- Description
- Price

## Run the Server

To run the server, you will need to run the following command in the project folder.

`npm start`

## Create

To add an item to the database, use following `POST` request on Insomnia along with a JSON body with `name`, `description` and `price` values.

`localhost:5000/items/add`

## Read

To read/fetch all the items from the database, use the following `GET` request on Insomnia.

`localhost:5000/items/`

OR

To read/fetch a single item using _id, use the following `GET` request on Insomnia. Replace :id with `_id` of the item you wish to fetch.

`localhost:5000/items/:id`

## Update

To update an item, use the following `PUT` request on Insomnia along with a JSON body with `name`, `description` and `price` values. Replace :id with `_id` of the item you wish to update.

`localhost:5000/items/:id`

## Delete

To delete an item, use the following `DELETE` request on Insomnia. Replace :id with `_id` of the item you wish to delete.

`localhost:5000/items/:id`

NOTE: You can always get the _id of an item by fetching all the items.