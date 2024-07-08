export function InputBox({
  placeholder,
  onChange,
}: {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="px-8 pb-4">
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-1 no-border rounded focus:border-white"
      />
    </div>
  );
}
