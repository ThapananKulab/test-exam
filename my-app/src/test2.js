import React from "react";
import { useForm } from "react-hook-form";

function MyBootstrapForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/submit-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();
      console.log(responseData);
      alert("Data submitted successfully");
    } catch (error) {
      console.error("Failed to submit data:", error);
      alert("Failed to submit data");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          name="email"
          type="email"
          {...register("email", { required: "Email is required" })}
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default MyBootstrapForm;
