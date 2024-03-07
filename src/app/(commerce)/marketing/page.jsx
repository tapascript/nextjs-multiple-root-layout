import Link from "next/link";

const page = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl my-2">Welcome To Marketing Page</h2>
      <Link className="underline" href="/">
        Go to Home
      </Link>
    </div>
  );
};

export default page;
