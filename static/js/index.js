// $(document).ready(function () {
    async function DataTable() {
        var table = $('#example').DataTable({
            
            "processing": true,
            "serverSide": true,
            "ajax": {
                "url": "api/get_all_products",
                "type": "GET",
                "datatype": "json",
                "data": function (d) {
                    return {  //this is the most important because from here we send parameter to our api which will fetch at that side and response according to it.
                        draw: d.draw,
                        start: d.start,
                        length: d.length,
                        search: d.search.value,
                        order: d.order
                    };
                },
                "dataSrc": function (json) {
                    return json.data;
                }
            },
            "columns": [
                { 
                    "data": function (row, type, set, meta) {
                        return meta.row+1;
                    }, 
                    "orderable": false
                },
                { "data": 1,"orderable": true }, //here data:1 means first column value from api should come in this column
                { "data": 2,"orderable": true }, //orderable true means user can sort the values.
                { "data": 3,"orderable": false }, // there will be no ordering option because ordering is false
                { "data": 4,"orderable": false },
                { "data": 5,"orderable": true },
                { "data": 6,"orderable": true },
                { "data": 7,"orderable": true },
                {
                    "data": function (row) {
                        return row[0];
                    },
                    "render": function (data, type, row, meta) {
                        let dataIndex = meta.row;

                        return `<div id="item-update-form">
                                <button id="upadate-item-id" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModalUpdate${dataIndex}"
                                    onclick="updateForm(${dataIndex})">Edit</button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="exampleModalUpdate${dataIndex}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Contact</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form class="text-start" id="item-add-form">
                                                <div class="mb-3">
                                                    <label for="exampleInputFirstName" class="form-label">First Name</label>
                                                    <input type="text" class="form-control" id="exampleInputFirstNameUpdate${dataIndex}" aria-describedby="" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputLastName" class="form-label">Last Name</label>
                                                    <input type="text" class="form-control" id="exampleInputLastNameUpdate${dataIndex}" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputDOB" class="form-label">DOB</label>
                                                    <input type="date" class="form-control" id="exampleInputDOBUpdate${dataIndex}" aria-describedby="" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputAddress" class="form-label">Address</label>
                                                    <textarea class="form-control" id="exampleInputAddressUpdate${dataIndex}" required></textarea>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputPincode" class="form-label">Pincode</label>
                                                    <input type="number" class="form-control" id="exampleInputPincodeUpdate${dataIndex}" aria-describedby="" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputCity" class="form-label">City</label>
                                                    <select class="form-control" id="exampleInputCityUpdate${dataIndex}" required>
                                                        <option value="Mumbai">Mumbai</option>
                                                        <option value="Delhi">Delhi</option>
                                                        <option value="Bangalore">Bangalore</option>
                                                        <option value="Kolkata">Kolkata</option>
                                                        <option value="Chennai">Chennai</option>
                                                        <option value="Hyderabad">Hyderabad</option>
                                                        <option value="Ahmedabad">Ahmedabad</option>
                                                        <option value="Pune">Pune</option>
                                                        <option value="Jaipur">Jaipur</option>
                                                        <option value="Surat">Surat</option>
                                                        <option value="Lucknow">Lucknow</option>
                                                        <option value="Kanpur">Kanpur</option>
                                                        <option value="Nagpur">Nagpur</option>
                                                        <option value="Patna">Patna</option>
                                                        <option value="Indore">Indore</option>
                                                        <option value="Thane">Thane</option>
                                                        <option value="Bhopal">Bhopal</option>
                                                        <option value="Visakhapatnam">Visakhapatnam</option>
                                                        <option value="Pimpri-Chinchwad">Pimpri-Chinchwad</option>
                                                        <option value="Vadodara">Vadodara</option>
                                                        <option value="Nashik">Nashik</option>
                                                        <option value="Agra">Agra</option>
                                                        <option value="Faridabad">Faridabad</option>
                                                        <option value="Ghaziabad">Ghaziabad</option>
                                                        <option value="Ludhiana">Ludhiana</option>
                                                        <option value="Coimbatore">Coimbatore</option>
                                                        <option value="Madurai">Madurai</option>
                                                        <option value="Jodhpur">Jodhpur</option>
                                                        <option value="Raipur">Raipur</option>
                                                        <option value="Kota">Kota</option>
                                                        <option value="Guwahati">Guwahati</option>
                                                        <option value="Chandigarh">Chandigarh</option>
                                                        <option value="Dehradun">Dehradun</option>
                                                        <option value="Bhubaneswar">Bhubaneswar</option>
                                                        <option value="Kochi">Kochi</option>
                                                        <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                                        <option value="Mangalore">Mangalore</option>
                                                        <option value="Amritsar">Amritsar</option>
                                                        <option value="Jalandhar">Jalandhar</option>
                                                        <option value="Varanasi">Varanasi</option>
                                                        <option value="Allahabad">Allahabad</option>
                                                        <option value="Meerut">Meerut</option>
                                                        <option value="Srinagar">Srinagar</option>
                                                        <option value="Dhanbad">Dhanbad</option>
                                                        <option value="Ranchi">Ranchi</option>
                                                        <option value="Jamshedpur">Jamshedpur</option>
                                                        <option value="Amravati">Amravati</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3 form-check">
                                                    <label class="" for="exampleCheck1">Male</label>
                                                    <input type="radio" class="form" id="exampleMaleUpdate${dataIndex}" value="Male" name="genderUpdate${dataIndex}" required>
                                                    <label class="" for="exampleCheck1">Female</label>
                                                    <input type="radio" class="form" id="exampleFemaleUpdate${dataIndex}" value="Female" name="genderUpdate${dataIndex}" required>
                                                </div>
                                                <button type="button" id="modalCloseButton${dataIndex}" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" onclick="updateContact(event, ${data}, '${dataIndex}')" >Save changes</button>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                    },
                     "orderable": false
                },
                {   //Added button indside the column
                    "data": function (row) {
                        return row[0];
                    },
                    "render": function (data, type, row, meta) {
                        let dataIndex = meta.row; 
    
                        return `<button type="button" class="btn btn-danger"  onclick="deleteButton(${data})" >Delete</button>`;
                    },
                    "orderable": false
                }
            ],
            //define the functionality you want in your data table
            "order": [[0, 'asc'], [1, 'desc']] , //here 0 means first column will be asc and 1 means secound column will be desc.
            "select": true,
            "colReorder": true,
            "searching": true,
            "paging": true,
            "lengthChange": true,
            "ordering": true,
            "info": true,
            "autoWidth": true,
        });
    }
    DataTable()

    // search function
    $('#example_filter input').on('keyup change', function () {
        table.column($(this).parent().index() + ':visible')
            .search(this.value)
            .draw();
    });


    // Insert functinoality here we have use model
    const cardBody = document.createElement("div");
    cardBody.innerHTML = `
    <button type="button" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Insert
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Contact</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
            <div class="modal-body">
                <form class="text-start" id="item-add-form">
                    <div class="mb-3">
                        <label for="exampleInputFirstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="exampleInputFirstName" aria-describedby="" required>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputLastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="exampleInputLastName" required>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputDOB" class="form-label">DOB</label>
                        <input type="date" class="form-control" id="exampleInputDOB" aria-describedby="" required>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputAddress" class="form-label">Address</label>
                        <textarea class="form-control" id="exampleInputAddress" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPincode" class="form-label">Pincode</label>
                        <input type="number" class="form-control" id="exampleInputPincode" aria-describedby="" required>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputCity" class="form-label">City</label>
                        <select class="form-control" id="exampleInputCity" required>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Pune">Pune</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Surat">Surat</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Kanpur">Kanpur</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="Patna">Patna</option>
                            <option value="Indore">Indore</option>
                            <option value="Thane">Thane</option>
                            <option value="Bhopal">Bhopal</option>
                            <option value="Visakhapatnam">Visakhapatnam</option>
                            <option value="Pimpri-Chinchwad">Pimpri-Chinchwad</option>
                            <option value="Vadodara">Vadodara</option>
                            <option value="Nashik">Nashik</option>
                            <option value="Agra">Agra</option>
                            <option value="Faridabad">Faridabad</option>
                            <option value="Ghaziabad">Ghaziabad</option>
                            <option value="Ludhiana">Ludhiana</option>
                            <option value="Coimbatore">Coimbatore</option>
                            <option value="Madurai">Madurai</option>
                            <option value="Jodhpur">Jodhpur</option>
                            <option value="Raipur">Raipur</option>
                            <option value="Kota">Kota</option>
                            <option value="Guwahati">Guwahati</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Dehradun">Dehradun</option>
                            <option value="Bhubaneswar">Bhubaneswar</option>
                            <option value="Kochi">Kochi</option>
                            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                            <option value="Mangalore">Mangalore</option>
                            <option value="Amritsar">Amritsar</option>
                            <option value="Jalandhar">Jalandhar</option>
                            <option value="Varanasi">Varanasi</option>
                            <option value="Allahabad">Allahabad</option>
                            <option value="Meerut">Meerut</option>
                            <option value="Srinagar">Srinagar</option>
                            <option value="Dhanbad">Dhanbad</option>
                            <option value="Ranchi">Ranchi</option>
                            <option value="Jamshedpur">Jamshedpur</option>
                            <option value="Amravati">Amravati</option>
                        </select>
                    </div>
                     <div class="mb-3 form-check">
                        <label class="" for="exampleCheck1">Male</label>
                        <input type="radio" class="form" id="exampleMale" value="Male" name="gender" required>
                        <label class="" for="exampleCheck1">Female</label>
                        <input type="radio" class="form" id="exampleFemale" value="Female" name="gender" required>
                    </div>
                      <div class="modal-footer">
                      <button type="submit" class="btn btn-primary">Submit</button>
                      <button type="button" id="modalCloseButton" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    `;

    $("#example_filter").addClass("d-flex");
    $("#example_filter").append(cardBody);



    // Insert funstion api call
    document.getElementById('item-add-form').onsubmit = async function (event) {
        event.preventDefault();

        var gender = document.querySelector('input[name="gender"]:checked').value;
        let firstname = document.getElementById("exampleInputFirstName").value.trim();
        let last_name = document.getElementById("exampleInputLastName").value.trim();
        let dob = document.getElementById("exampleInputDOB").value
        let address = document.getElementById("exampleInputAddress").value.trim();
        let pincode = document.getElementById("exampleInputPincode").value.trim();
        let city = document.getElementById("exampleInputCity").value.trim();


        const formData = new FormData();
        formData.append("first_name", firstname);
        formData.append("last_name", last_name);
        formData.append("dob", dob);
        formData.append("address", address);
        formData.append("pincode", pincode);
        formData.append("city", city);
        formData.append("gender", gender);


        document.querySelectorAll(".error").forEach((curElem) => curElem.remove());

        if (InsertValidate()) {
            const button = document.getElementById('modalCloseButton');
            button.addEventListener('click', () => {
                document.getElementById('item-add-form').reset();
            });
            button.click();

            try {
                const response = await fetch("/api/insertcontact", {
                    method: "POST",
                    body: formData
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("Contact Data inserted successfully", data);

                    document.getElementById('item-add-form').reset();
                    $('#exampleModal').modal('hide');
                } else {
                    console.error("Failed to insert contact data");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }

//validation for Insert form
function InsertValidate() {
    console.log("InsertValidate")
    function setErrorMsg(id, errorMsg) {
        const newStrong = document.createElement('strong');
        newStrong.setAttribute('id', `${id}-error`);
        newStrong.setAttribute('class', 'error mt-1');
        newStrong.style.color = 'red';
        const inputElement = document.getElementById(`${id}`);
        newStrong.textContent = errorMsg;
        inputElement.insertAdjacentElement('afterend', newStrong);
    }

    const firstname = document.getElementById(`exampleInputFirstName`).value.trim();
    const lastname = document.getElementById(`exampleInputLastName`).value.trim();
    const address = document.getElementById(`exampleInputAddress`).value.trim();
    const dob = document.getElementById(`exampleInputDOB`).value.trim();
    const pincode = document.getElementById(`exampleInputPincode`).value.trim();
    const city = document.getElementById(`exampleInputCity`).value.trim();
    const dobDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();

    if (firstname === "") {
        setErrorMsg(`exampleInputFirstName`, "First Name cannot be blank");
        return false;
    } else if (firstname.length > 50) {
        setErrorMsg(`exampleInputFirstName`, "First name length should not exceed 50 characters.");
        return false;
    } else if (/\d/.test(firstname)) {
        setErrorMsg(`exampleInputFirstName`, "First name should consist of alphabetic characters only.");
        return false;
    } else if (lastname === "") {
        setErrorMsg(`exampleInputLastName`, "Last Name cannot be blank");
        return false;
    } else if (lastname.length > 50) {
        setErrorMsg(`exampleInputLastName`, "Last name length should not exceed 50 characters.");
        return false;
    } else if (!/^[a-zA-Z]+$/.test(lastname)) {
        setErrorMsg(`exampleInputLastName`, "Last name should consist of alphabetic characters only.");
        return false;
    } else if (address.length > 100) {
        setErrorMsg(`exampleInputAddress`, "Address length should not exceed 100 characters.");
        return false;
    } else if (pincode.length > 8) {
        setErrorMsg(`exampleInputPincode`, "Pincode length should not exceed 8 characters.");
        return false;
    } else if (!/^\d+$/.test(pincode)) {
        setErrorMsg(`exampleInputPincode`, "Pincode should consist of numeric digits only.");
        return false;
    } else if (city.length > 50) {
        setErrorMsg(`exampleInputCity`, "City length should not exceed 50 characters.");
        return false;
    } else if (/\d/.test(city)) {
        setErrorMsg(`exampleInputCity`, "City should consist of alphabetic characters only.");
        return false;
    } else if (age <= 18) {
        setErrorMsg(`exampleInputDOB`, "Age should be greater than 18 years.");
        return false;
    } else if (dobDate >= today) {
        setErrorMsg(`exampleInputDOB`, "Invalid Date of Birth.");
        return false;
    }else {
        return true;
    }
    }



// Delete function api call
async function deleteButton(id) {
    const formData = new FormData();
    formData.append("id", id);

    try {
        const response = await fetch("/api/deletecontact", {
            method: "DELETE",
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Contact Data deleted successfully");
            $('#example').DataTable().destroy();
            DataTable()
        } else {
            console.error("Failed to delete contact data");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

//This function will push the value in form so that form will be pre filled while updating.
async function updateForm(data){
   
    var row = $(`tbody tr:eq(${data})`);
    console.log(row.find('td:eq(6)').text())
    var firstName = row.find('td:eq(1)').text();
    const firstname = document.getElementById(`exampleInputFirstNameUpdate${data}`).value = row.find('td:eq(1)').text();
    const lasttname = document.getElementById(`exampleInputLastNameUpdate${data}`).value = row.find('td:eq(2)').text();
    document.getElementById(`exampleInputDOBUpdate${data}`).value = row.find('td:eq(3)').text();
    document.getElementById(`exampleInputAddressUpdate${data}`).value = row.find('td:eq(4)').text();
    document.getElementById(`exampleInputPincodeUpdate${data}`).value = row.find('td:eq(5)').text();
    document.getElementById(`exampleInputCityUpdate${data}`).value = row.find('td:eq(6)').text();
    const gender = row.find('td').eq(7).text();
    document.getElementById(`exampleMaleUpdate${data}`).checked = (gender === 'Male');
    document.getElementById(`exampleFemaleUpdate${data}`).checked = (gender === 'Female');

    }


//Update function api call
async function updateContact(event, id, data) {
    event.preventDefault();

    const gender = document.querySelector(`input[name=genderUpdate${data}]:checked`).value;
    const formData = new FormData();
    formData.append('id', id);
    formData.append('first_name', document.getElementById(`exampleInputFirstNameUpdate${data}`).value);
    formData.append('last_name', document.getElementById(`exampleInputLastNameUpdate${data}`).value);
    formData.append('dob', document.getElementById(`exampleInputDOBUpdate${data}`).value);
    formData.append('address', document.getElementById(`exampleInputAddressUpdate${data}`).value);
    formData.append('pincode', document.getElementById(`exampleInputPincodeUpdate${data}`).value);
    formData.append('city', document.getElementById(`exampleInputCityUpdate${data}`).value);
    formData.append('gender', gender);

    document.querySelectorAll(".error").forEach((curElem) => curElem.remove());

    if (updateValidate(data)) {
        const button = document.getElementById(`modalCloseButton${data}`);
        button.addEventListener('click', () => {
            document.getElementById('item-add-form').reset();
        });
        button.click();
        try {
            const response = await fetch('/api/updatecontact', {
                method: 'PUT',
                body: formData
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Contact Data Updated successfully');
                $('#example').DataTable().destroy();
                DataTable();
            } else {
                console.error('Failed to update contact data:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
}


//validation for update form
function updateValidate(data) {
    function setErrorMsg(id, errorMsg) {
        const newStrong = document.createElement('strong');
        newStrong.setAttribute('id', `${id}-error`);
        newStrong.setAttribute('class', 'error mt-1');
        newStrong.style.color = 'red';
        const inputElement = document.getElementById(`${id}`);
        newStrong.textContent = errorMsg;
        inputElement.insertAdjacentElement('afterend', newStrong);
    }

    const firstname = document.getElementById(`exampleInputFirstNameUpdate${data}`).value.trim();
    const lastname = document.getElementById(`exampleInputLastNameUpdate${data}`).value.trim();
    const address = document.getElementById(`exampleInputAddressUpdate${data}`).value.trim();
    const dob = document.getElementById(`exampleInputDOBUpdate${data}`).value.trim();
    const pincode = document.getElementById(`exampleInputPincodeUpdate${data}`).value.trim();
    const city = document.getElementById(`exampleInputCityUpdate${data}`).value.trim();
    const dobDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();

    if (firstname === "") {
        setErrorMsg(`exampleInputFirstNameUpdate${data}`, "First Name cannot be blank");
        return false;
    } else if (firstname.length > 50) {
        setErrorMsg(`exampleInputFirstNameUpdate${data}`, "First name length should not exceed 50 characters.");
        return false;
    } else if (/\d/.test(firstname)) {
        setErrorMsg(`exampleInputFirstNameUpdate${data}`, "First name should consist of alphabetic characters only.");
        return false;
    } else if (lastname === "") {
        setErrorMsg(`exampleInputLastNameUpdate${data}`, "Last Name cannot be blank");
        return false;
    } else if (lastname.length > 50) {
        setErrorMsg(`exampleInputLastNameUpdate${data}`, "Last name length should not exceed 50 characters.");
        return false;
    } else if (!/^[a-zA-Z]+$/.test(lastname)) {
        setErrorMsg(`exampleInputLastNameUpdate${data}`, "Last name should consist of alphabetic characters only.");
        return false;
    } else if (address.length > 100) {
        setErrorMsg(`exampleInputAddressUpdate${data}`, "Address length should not exceed 100 characters.");
        return false;
    } else if (pincode.length > 8) {
        setErrorMsg(`exampleInputPincodeUpdate${data}`, "Pincode length should not exceed 8 characters.");
        return false;
    } else if (!/^\d+$/.test(pincode)) {
        setErrorMsg(`exampleInputPincodeUpdate${data}`, "Pincode should consist of numeric digits only.");
        return false;
    } else if (city.length > 50) {
        setErrorMsg(`exampleInputCityUpdate${data}`, "City length should not exceed 50 characters.");
        return false;
    } else if (/\d/.test(city)) {
        setErrorMsg(`exampleInputCityUpdate${data}`, "City should consist of alphabetic characters only.");
        return false;
    } else if (age <= 18) {
        setErrorMsg(`exampleInputDOBUpdate${data}`, "Age should be greater than 18 years.");
        return false;
    } else if (dobDate >= today) {
        setErrorMsg(`exampleInputDOBUpdate${data}`, "Invalid Date of Birth.");
        return false;
    } else {
        return true;
    }
}



