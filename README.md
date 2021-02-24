# Car Rental System Application
A car rental System Project using Node js.

### Technologies Used
<li>Node js
<li>Express js
<li>JavaScript
<li>EJS
<li>CSS



### Functionalities:-
<li>Home Page for introduction
<li>Cars list page for select car to book

```Link
http://localhost:3500/cars
```
<li>Car Add page for adding car for rent

```Link
http://localhost:3500/addcar
```
<li>Restful APIs with other routes for handling data with Get and Post functionalities.

<br>GET

```Link
http://localhost:3500/api/cars
```

POST
```Link
http://localhost:3500/api/addcar
```

### Posting request to API

```Bash
curl -i -H "Content-Type: application/json" -X POST -d '{"car": "Maruti","model": "2018","fair": "$5000"}' http://localhost:3500/addcar
```

## Preview


<img src="previews/rent-1.gif">

