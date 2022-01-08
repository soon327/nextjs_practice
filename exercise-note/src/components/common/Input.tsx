interface InputProps {
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  style?: string;
}

export default function Input({ handleInput, placeholder, style }: InputProps) {
  return (
    <input
      className={`mt-1 ml-4 mr-2 w-52 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-pink-500 ${style}`}
      onChange={handleInput}
      placeholder={placeholder}
    />
  );
}
