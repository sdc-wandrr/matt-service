# Wandrr Image Carousel Service

> The image carousel component for Wandrr app.

## Related Projects

  - https://github.com/hrr47-karev/property-info-service
  - https://github.com/hrr47-karev/Availability-Component
  - https://github.com/hrr47-karev/Reviews-Service
  - https://github.com/hrr47-karev/imageCarouselProxy

## Table of Contents

1. [Usage](#usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [API](#api)

## Usage

The image carousel component needs to mount onto two separate divs in the root html page. The first div should have the ID 'images-header' and the second div should have the ID 'image-grid'. There will be another div in-between these two to host the 'infoservice' component, but that is outside the scope of this service.

The React.ref() used to scroll the page down to the availability will look for a div outside the scope of this service. Make sure to communicate with other team members to ensure that the Availability-Component is mounted to a div with the ID of 'Availability' for this feature to work.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node v12.18.1
  - https://nodejs.org/
- MySQL v5.7.31
  - https://dev.mysql.com/

## Development

**important***
> You need to rename the file ```RENAME_ME_TO_CONFIG.js``` inside ```server/database/``` to ```config.js```

> You then need to add your personal MySQL username and password inside the file where instructed.

Running webpack w/ Babel:

```
npm run react-dev
```

Running server in development (w/ Nodemon)

```
npm run server-dev
```

Running server in production

```
npm start
```

## Installing Dependencies

From within the root directory:

```
npm install
```

## API

Please use the following routes for all requests to the server:

**GET**
```/api/hostels/:hostel_id/images```

A GET request to the above endpoint will fetch an array of objects containing images and image descriptions for the specified hostel id.
![Alt ](/screenshots/GET-request.png?raw=true "GET request sample data")


**POST**
```/api/hostels/:hostel_id```

A POST request to the above endpoint will create a new hostel listing. The following JSON format is required in the POST requests' body in order for the hostel to be successfully created:
![Alt ](/screenshots/POST-request.png?raw=true "Example JSON body for POST request")


**PUT**
```/api/hostels/:hostel_id```

A PUT request to the above endpoint will update a specific hostel's image/image description. You must include an image ID in the body of the PUT request to target a specific image record. The following JSON format is required in the PUT requests' body in order for the image and description to be successfully updated.
![Alt ](/screenshots/PUT-request.png?raw=true "Example JSON body for PUT request")


**DELETE**
```/api/hostels/:hostel_id```

A DELETE request to the above endpoint will delete all records of the hostel from the database. Please note: this removes the main hostel listing as well as all associated images and descriptions.
![Alt ](/screenshots/DELETE-request.png?raw=true "DELETE request success example")
