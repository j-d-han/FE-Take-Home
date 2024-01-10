import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { setDefaults, fromAddress } from "react-geocode";

const NewEmployeeForm = (props) => {
  // Address retrieved from google api
  const [address, setAddress] = useState(null);

  setDefaults({
    key: "AIzaSyD3xkg6XozaLVU1yNbQRkeH06cZx9Icp1w",
    language: "en",
    region: "sg",
  });

  const submitFormHandler = (e) => {
    e.preventDefault();

    // Retrieve address name
    const locationName = address["value"]["description"];

    const fields = new FormData(e.target);

    fromAddress(locationName).then((response) => {
      // Retrieve lat and lng from user's address which can later be
      // displayed on google maps with markers
      const { lat, lng } = response.results[0].geometry.location;

      // Create new employee with respective fields
      const newEmployee = {
        name: fields.get("name"),
        age: parseInt(fields.get("age")),
        email: fields.get("email"),
        address: locationName,
        lat: lat,
        lng: lng,
      };
      props.onAddEmployee(newEmployee);
    });
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
