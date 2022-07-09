import React, { useState } from "react";
import PrivateRoute from "../components/PrivateRoute";
import Layout from "../components/Layout";
import { navigate } from "gatsby";


const GETFORM_FORM_ENDPOINT = "YOUR-FORM-ENDPOINT";

export default function Sell() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleProductName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleAdd = () => {
    // add to states
  };























  const [formStatus, setFormStatus] = useState(false);
    const [query, setQuery] = useState({
        name: "",
        email: "",
    });

    const handleFileChange = () => (e) => {
        setQuery((prevState) => ({
            ...prevState,
            files: e.target.files[0]
        }));
    };

    const handleChange = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        });

        axios
            .post(
                GETFORM_FORM_ENDPOINT,
                formData,
                {headers: {Accept: "application/json"}}
            )
            .then(function (response) {
                setFormStatus(true);
                setQuery({
                    name: "",
                    email: "",
                });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
          }






















          
  return (
    <PrivateRoute>
      <Layout
        children={
          <div className="bg-gray-100 w-full min-h-screen flex justify-center items-center">
            <body className="bg-gray-100 antialiased flex font-sans text-gray-900">
              <form className="px-4 rounded mx-auto max-w-3xl w-full my-32 inputs space-y-6">
                <div>
                  <h1 className="text-4xl font-bold">Add a new product!</h1>
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label>Product Title</label>
                    <input
                      className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                      value={productName}
                      onChange={handleProductName}
                      type="text"
                      placeholder="Fresh Lettuce"
                    />
                  </div>
                  <div className="w-1/2">
                    <div>
                      <label>Quantity</label>
                      <div className="flex">
                        <div className="rounded-l flex text-white items-center px-4 bg-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 fill-current"
                            viewBox="0 0 288 512"
                          >
                            <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z" />
                          </svg>
                        </div>
                        <input
                          min="1"
                          step="1"
                          placeholder="1"
                          className="border border-gray-400 px-4 py-2 rounded-r w-full focus:outline-none focus:border-teal-400"
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label>Product Description</label>
                  <input
                    className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                    value={description}
                    onChange={handleDescription}
                    type="text"
                    placeholder="Lorem Ipsum deez nuts..."
                  />
                </div>
                <div>
                  <label>Price</label>
                  <div className="flex w-1/4">
                    <div className="rounded-l flex text-white items-center px-4 bg-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 fill-current"
                        viewBox="0 0 288 512"
                      >
                        <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z" />
                      </svg>
                    </div>
                    <input
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      className="border border-gray-400 px-4 py-2 rounded-r w-full focus:outline-none focus:border-teal-400"
                      type="number"
                    />
                  </div>














                  <div class="container-md">
            <h2>Gatsby File Upload Form using Getform.io</h2>
            <form
                acceptCharset="UTF-8"
                method="POST"
                enctype="multipart/form-data"
                id="gatsbyForm"
                onSubmit={handleSubmit}
            >
                <div className="form-group mb-2">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                        name="email"
                        value={query.email}
                        onChange={handleChange()}
                    />
                </div>
                <div className="form-group mb-2">
                    <label for="exampleInputName">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                        name="name"
                        value={query.name}
                        onChange={handleChange()}
                    />
                </div>
                <hr/>
                <div className="form-group mt-3">
                    <label className="mr-2">Upload your FUCKING GAY ASS PHOTOS:</label>
                    <input name="file" type="file" onChange={handleFileChange()}/>
                </div>
                <hr/>
                {formStatus ? (
                    <div className="text-success mb-2">
                        Your message has been sent.
                    </div>
                ) : (
                    ""
                )}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>












                </div>
                <button
                  className="w-full my-2 py-2 bg-red-500 rounded text-white hover:shadow-md hover:shadow-teal-500/20"
                  type="submit"
                  onClick={handleAdd}
                >
                  Add Product!
                </button>
              </form>
            </body>
          </div>
        }
      />
    </PrivateRoute>
  );
}
