interface InputBoxProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  
}

const InputBox: React.FC<InputBoxProps> = ({
  label,
  type,
  name,
  required,
  value,
  onChange,
  error
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        required={required}
        className={`peer w-full h-12 px-3 pt-6 pb-2 bg-gray-100 border 
          ${error ? "border-red-500" : "border-gray-300"}
          rounded-md text-gray-900 focus:outline-none focus:ring-2 
          ${error ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-purple-500 focus:border-purple-500"}
        `}
      />

      <label className="absolute left-3 top-2 text-sm font-medium text-purple-600 transition-all 
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
        peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple-600">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputBox;
