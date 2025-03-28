import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import InputBox from "../../Components/InputBox";

// Define Schema using Zod
const signupSchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  companyName: z.string().optional(),
});

// Define Type from Schema
type SignupFormData = z.infer<typeof signupSchema>;

const Signup = () => {
  const navigate = useNavigate();

  // State for form inputs and errors
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof SignupFormData, string>>>({});

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form using Zod
    const result = signupSchema.safeParse(formData);

    if (!result.success) {
      // Extract errors
      const formattedErrors: Partial<Record<keyof SignupFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof SignupFormData;
        formattedErrors[field] = err.message;
      });
      setErrors(formattedErrors);
      return;
    }

    // If no errors, navigate to account page
    navigate("/account");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md flex flex-col">
        <div className="flex flex-col flex-grow pt-4">
          <h1 className="text-2xl font-bold text-gray-900">Create your</h1>
          <h1 className="text-2xl font-bold text-gray-900">PopX account</h1>

          <form className="mt-6 flex flex-col flex-grow space-y-4" onSubmit={handleSubmit}>
            <InputBox
              label="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              required
            />
            <InputBox
              label="Phone Number"
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={errors.phoneNumber}
              required
            />
            <InputBox
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            <InputBox
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />
            <InputBox
              label="Company Name"
              type="text"
              name="companyName"
              value={formData.companyName ?? ""}
              onChange={handleChange}
              error={errors.companyName}
            />

            <div className="mt-auto">
              <button
                type="submit"
                className="w-full mb-4 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
