import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";

const NewEmployeeForm = (props) => {
  const [address, setAddress] = useState(null);

  setDefaults({
    key: "AIzaSyD3xkg6XozaLVU1yNbQRkeH06cZx9Icp1w", // Your API key here.
    language: "en", // Default language for responses.
    region: "sg", // Default region for responses.
  });

  const submitFormHandler = (e) => {
    e.preventDefault();

    const fields = new FormData(e.target);

    const locationName = address["value"]["description"];

    // fromAddress(locationName).then((response) => {
    //   const { lat, lng } = response.results[0].geometry.location;
    //   console.log("WEEEEEEEEE");
    //   console.log(lat);
    //   console.log(lng);
    //   console.log(locationName);
    // });

    const newEmployee = {
      name: fields.get("name"),
      age: parseInt(fields.get("age")),
      email: fields.get("email"),
      address: locationName,
    };
    console.log(newEmployee);
    props.onAddEmployee(newEmployee);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label for="name">Name</label>
      <br />
      <input type="text" id="name" name="name" placeholder="Name" required />
      <br />
      <label for="age">Age</label>
      <br />
      <input
        type="number"
        id="age"
        name="age"
        placeholder="1-100"
        min="1"
        max="100"
        required
      />
      <br />
      <label for="email">Email</label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="xx@gmail.com"
        required
      />
      <br />
      <label>Address:</label>
      <GooglePlacesAutocomplete
        selectProps={{
          address,
          //@ts-ignore
          onChange: setAddress,
        }}
      />
      <br />
      <button style={{ marginRight: 5 }} onClick={props.onCancel}>
        Cancel
      </button>
      <button style={{ marginRight: 5 }} type="submit">
        Save
      </button>
    </form>
  );
};

export default NewEmployeeForm;
